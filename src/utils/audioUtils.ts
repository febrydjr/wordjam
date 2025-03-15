
let audioContext: AudioContext | null = null;

const getAudioContext = (): AudioContext => {
  if (!audioContext) {
    audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  return audioContext;
};

export const playTone = (type: 'success' | 'error', duration = 200) => {
  try {
    const context = getAudioContext();
    const oscillator = context.createOscillator();
    const gainNode = context.createGain();
    
    // Connect oscillator to gain node and gain node to audio output
    oscillator.connect(gainNode);
    gainNode.connect(context.destination);
    
    // Configure oscillator
    if (type === 'success') {
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(440, context.currentTime); // A4
      oscillator.frequency.exponentialRampToValueAtTime(880, context.currentTime + 0.2); // A5
    } else {
      oscillator.type = 'sawtooth';
      oscillator.frequency.setValueAtTime(330, context.currentTime); // E4
      oscillator.frequency.exponentialRampToValueAtTime(220, context.currentTime + 0.2); // A3
    }
    
    // Configure gain (volume)
    gainNode.gain.setValueAtTime(0.3, context.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, context.currentTime + duration / 1000);
    
    // Start and stop oscillator
    oscillator.start(context.currentTime);
    oscillator.stop(context.currentTime + duration / 1000);
    
    return oscillator;
  } catch (error) {
    console.error('Audio playback failed:', error);
    return null;
  }
};

export const playButtonSound = (type: 'new' | 'seen') => {
  if (type === 'new') {
    playTone('success', 150);
  } else {
    playTone('success', 150);
  }
};

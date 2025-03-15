
-- Database setup for Word Memory Game

-- Create words table
CREATE TABLE words (
  id SERIAL PRIMARY KEY,
  text VARCHAR(255) NOT NULL UNIQUE
);

-- Create user_scores table
CREATE TABLE user_scores (
  id SERIAL PRIMARY KEY,
  user_id VARCHAR(255) NOT NULL,
  score INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create index on user_id for faster lookups
CREATE INDEX idx_user_scores_user_id ON user_scores(user_id);

-- Insert initial words data
INSERT INTO words (text) VALUES
('Apple'), ('Banana'), ('Cherry'), ('Date'), ('Elderberry'),
('Fig'), ('Grape'), ('Honeydew'), ('Kiwi'), ('Lemon'),
('Mango'), ('Nectarine'), ('Orange'), ('Peach'), ('Quince'),
('Raspberry'), ('Strawberry'), ('Tangerine'), ('Ugli'), ('Vanilla'),
('Watermelon'), ('Xigua'), ('Yuzu'), ('Zucchini'), ('Almond'),
('Butter'), ('Cheese'), ('Donut'), ('Egg'), ('Flour'),
('Ginger'), ('Honey'), ('Ice'), ('Jam'), ('Ketchup'),
('Lentil'), ('Mustard'), ('Noodle'), ('Oatmeal'), ('Pasta'),
('Quinoa'), ('Rice'), ('Sugar'), ('Tea'), ('Umami'),
('Vinegar'), ('Waffle'), ('Xylose'), ('Yogurt'), ('Salt'),
('Apricot'), ('Bread'), ('Cocoa'), ('Duck'), ('Endive'),
('Fudge'), ('Garlic'), ('Ham'), ('Iceberg'), ('Jerky'),
('Kale'), ('Lime'), ('Milk'), ('Nut'), ('Olive'),
('Pepper'), ('Quiche'), ('Radish'), ('Salad'), ('Thyme'),
('Udon'), ('Venison'), ('Wasabi'), ('Xanthan'), ('Yam'),
('Zest'), ('Artichoke'), ('Basil'), ('Corn'), ('Dill'),
('Eggplant'), ('Fennel'), ('Guava'), ('Horseradish'), ('Icing'),
('Jalapeno'), ('Kohlrabi'), ('Leek'), ('Mushroom'), ('Nutmeg'),
('Oregano'), ('Parsley'), ('Quail'), ('Rosemary'), ('Sage'),
('Tofu'), ('Upside'), ('Veal'), ('Walnut'), ('Tarragon');

-- Sample query to get random words
-- SELECT text FROM words ORDER BY RANDOM() LIMIT 20;

-- Sample query to get high score for a user
-- SELECT MAX(score) FROM user_scores WHERE user_id = 'user123';

-- Sample query to insert a new score
-- INSERT INTO user_scores (user_id, score) VALUES ('user123', 15);

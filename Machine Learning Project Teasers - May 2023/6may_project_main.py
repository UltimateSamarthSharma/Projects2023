import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import classification_report, confusion_matrix

# Read in the dataset
df = pd.read_csv('wafer_faults.csv')

# Drop any missing values
df = df.dropna()

# Convert the target variable to binary values
df['fault'] = np.where(df['fault'] == 'Yes', 1, 0)

# Split the dataset into features and target variable
X = df.drop('fault', axis=1)
y = df['fault']

# Scale the features
scaler = StandardScaler()
X = scaler.fit_transform(X)

# Split the dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train a logistic regression model on the training data
model = LogisticRegression()
model.fit(X_train, y_train)

# Generate predictions on the testing data
y_pred = model.predict(X_test)

# Output the confusion matrix and classification report
print(confusion_matrix(y_test, y_pred))
print(classification_report(y_test, y_pred))

# Output the coefficients for the logistic regression model
coefficients = pd.DataFrame({'Feature': df.columns[:-1], 'Coefficients': model.coef_[0]})
coefficients = coefficients.sort_values(by='Coefficients', ascending=False)
print(coefficients)

# Save the results to a CSV file
results = pd.DataFrame({'Actual': y_test, 'Predicted': y_pred})
results.to_csv('result_6may.csv', index=False)
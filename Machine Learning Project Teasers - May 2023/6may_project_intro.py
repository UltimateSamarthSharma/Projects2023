import pandas as pd
import numpy as np

# Set the number of samples and features in the dataset
n_samples = 1000
n_features = 10

# Create random data for the features
X = np.random.rand(n_samples, n_features)

# Add noise to the data to simulate sensor readings
X = X + np.random.normal(loc=0, scale=0.1, size=X.shape)

# Create a target variable with randomly generated faults
y = np.random.choice(['Yes', 'No'], size=n_samples)

# Combine the features and target variable into a dataframe
df = pd.DataFrame(X, columns=[f'Feature {i+1}' for i in range(n_features)])
df['fault'] = y

# Save the dataframe to a CSV file
df.to_csv('wafer_faults.csv', index=False)
# ETH/USDT

## 数据准备

<DocsAD/>

```py
import requests
import pandas as pd

# 设置API endpoint
base_url = 'https://api.binance.com/api/v3/klines'

# 设置参数
symbol = 'ETHUSDT'
interval = '1d'  # K线周期（例如：1m, 3m, 5m, 15m, 1h, 4h, 1d等）
limit = 360  # 获取的K线数量

params = {
    'symbol': symbol,
    'interval': interval,
    'limit': limit
}

# 发送GET请求
response = requests.get(base_url, params=params)

# 检查响应
if response.status_code == 200:
    data = response.json()
    # 转换为DataFrame
    df = pd.DataFrame(data, columns=[
        'Open Time', 'Open', 'High', 'Low', 'Close', 'Volume',
        'Close Time', 'Quote Asset Volume', 'Number of Trades',
        'Taker Buy Base Asset Volume', 'Taker Buy Quote Asset Volume', 'Ignore'
    ])
    # 转换时间格式
    df['Open Time'] = pd.to_datetime(df['Open Time'], unit='ms')
    df['Close Time'] = pd.to_datetime(df['Close Time'], unit='ms')
    
    # 输出到CSV文件
    df.to_csv('ETHUSDT_data.csv', index=False)
    print("Data saved to ETHUSDT_data.csv")

else:
    print(f'Error: {response.status_code} - {response.text}')
```

```
Open Time,Open,High,Low,Close,Volume,Close Time,Quote Asset Volume,Number of Trades,Taker Buy Base Asset Volume,Taker Buy Quote Asset Volume,Ignore
2023-10-29,1776.21000000,1811.30000000,1762.66000000,1795.14000000,144110.65080000,2023-10-29 23:59:59.999,258015412.93155400,371024,68282.97790000,122240383.72822500,0
2023-10-30,1795.14000000,1829.84000000,1777.77000000,1809.04000000,277686.19200000,2023-10-30 23:59:59.999,501228029.31760500,560359,134895.64800000,243576319.80932100,0
2023-10-31,1809.03000000,1819.41000000,1780.99000000,1814.67000000,258074.57960000,2023-10-31 23:59:59.999,464695558.99525400,577888,120112.91540000,216284275.88791600,0
2023-11-01,1814.67000000,1857.66000000,1783.19000000,1846.99000000,471921.61840000,2023-11-01 23:59:59.999,858744655.31150800,862416,234932.89940000,427830377.61923100,0
```

## 特征工程

```py
import pandas as pd

# 读取CSV文件
file_path = 'ETHUSDT_data.csv'  # 假设文件名为 'ETHUSDT_data.csv'
df = pd.read_csv(file_path)

# 排除时间字段
df = df.drop(columns=['Open Time', 'Close Time','Ignore'])

# 查看数据
print(df.head())
```

## 算法模型

```py
# 从CSV文件读取数据
file_path = '/content/ETHUSDT_data.csv'  # 确保该路径为你的CSV文件的实际路径
data = pd.read_csv(file_path)

# 选择需要的列
data = data[['Open', 'High', 'Low', 'Close', 'Volume']]

# 特征和目标变量
X = data[['Open', 'High', 'Low', 'Volume']].values
y = data['Close'].values

# 标准化特征
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# 划分训练集和测试集
X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.2, random_state=42)

# 创建SVR模型
model = SVR(kernel='rbf')  # 可以尝试其他核函数，如 'linear', 'poly', 'sigmoid'

# 训练模型
model.fit(X_train, y_train)
```

## 预测数据

```py
# 预测新数据
new_data = np.array([[2440.88000000,2351.42000000,2370.47000000,242082.27250000]])

# 标准化新数据（注意使用训练时的scaler）
new_data_scaled = scaler.transform(new_data[:, :8])  # 只标准化特征部分

# 进行预测
new_prediction = model.predict(new_data_scaled)

print(f'Predicted Close Price: {new_prediction[0]:.2f}')
```
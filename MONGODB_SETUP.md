# MongoDB Atlas Setup Guide

## Step 1: Get Your MongoDB Atlas Connection String

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up or log in
3. Create a new cluster (Free tier is fine)
4. Click **"Connect"** on your cluster
5. Choose **"Connect your application"**
6. Copy the connection string (looks like):
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```

## Step 2: Update application.properties

Open `Backend/demo/src/main/resources/application.properties` and replace:

```properties
spring.data.mongodb.uri=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@YOUR_CLUSTER.mongodb.net/carwashdb?retryWrites=true&w=majority
```

**Important:**
- Replace `YOUR_USERNAME` with your MongoDB Atlas username
- Replace `YOUR_PASSWORD` with your MongoDB Atlas password
- Replace `YOUR_CLUSTER` with your cluster name (e.g., `cluster0.xxxxx`)
- Keep `/carwashdb` as the database name

## Step 3: Configure Network Access

1. In MongoDB Atlas, go to **Network Access**
2. Click **"Add IP Address"**
3. Click **"Allow Access from Anywhere"** (for development) or add your IP
4. Click **"Confirm"**

## Step 4: Create Database User

1. In MongoDB Atlas, go to **Database Access**
2. Click **"Add New Database User"**
3. Choose **"Password"** authentication
4. Enter username and password (remember these!)
5. Set privileges to **"Read and write to any database"**
6. Click **"Add User"**

## Step 5: Restart Backend

```powershell
cd Backend\demo
.\mvnw.cmd spring-boot:run -DskipTests
```

## Example Connection String

```
mongodb+srv://myuser:mypassword123@cluster0.abc123.mongodb.net/carwashdb?retryWrites=true&w=majority
```

## Troubleshooting

### Connection Failed?
- Check username/password in connection string
- Verify network access allows your IP
- Check if database user has correct permissions
- Make sure cluster is running (not paused)

### Authentication Failed?
- Double-check username and password
- Ensure special characters in password are URL-encoded
- Verify database user exists

### Timeout?
- Check your internet connection
- Verify MongoDB Atlas cluster is not paused
- Check firewall settings

## Quick Test

After setup, the backend will automatically:
- Connect to MongoDB Atlas
- Create the `users` collection
- Create a test user: `test@example.com` / `password123`

You can verify in MongoDB Atlas:
1. Go to **Collections**
2. Select `carwashdb` database
3. You should see `users` collection with test user


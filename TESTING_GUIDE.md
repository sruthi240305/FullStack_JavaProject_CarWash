# Testing Guide - Car Wash Application

## Prerequisites Check

### 1. Database Setup
- **MySQL** must be installed and running
- Default credentials in `application.properties`:
  - Username: `root`
  - Password: `root`
  - Database: `carwashdb` (will be created automatically)

### 2. Java & Maven
- Java 21 installed
- Maven installed

### 3. Node.js
- Node.js installed (for frontend)

---

## Step-by-Step Testing

### Step 1: Start MySQL Database

**Windows:**
```bash
# Check if MySQL is running
net start MySQL80
# or
mysql -u root -p
```

**Mac/Linux:**
```bash
sudo systemctl start mysql
# or
sudo service mysql start
```

### Step 2: Start Backend Server

```bash
cd Backend/demo
mvn clean install
mvn spring-boot:run
```

**Expected Output:**
- Server starts on `http://localhost:8080`
- You should see: "Started DemoApplication in X seconds"
- Database connection successful
- No errors in console

**Check Backend Health:**
Open browser: `http://localhost:8080/api/auth/login` (should return 405 Method Not Allowed - this is normal, means server is running)

### Step 3: Start Frontend Server

Open a **new terminal**:
```bash
cd FrontEnd
npm install  # Only needed first time
npm run dev
```

**Expected Output:**
- Server starts on `http://localhost:5173` (or similar port)
- You should see: "Local: http://localhost:5173"

### Step 4: Test Login Page

1. Open browser: `http://localhost:5173`
2. You should see the login form with:
   - Email field
   - Password field
   - Login button
   - "Register" link at bottom

### Step 5: Test Registration

1. Click "Register" button
2. Fill in the form:
   - First Name: `John`
   - Last Name: `Doe`
   - Email: `john@example.com`
   - Password: `password123` (min 6 characters)
3. Click "Register"
4. **Expected:** Success message, token stored, redirected

### Step 6: Test Login

1. If logged out, go back to login page
2. Enter credentials:
   - Email: `john@example.com`
   - Password: `password123`
3. Click "Login"
4. **Expected:** Success message, token stored

### Step 7: Test API Endpoints (Optional)

**Using curl or Postman:**

**Register:**
```bash
curl -X POST http://localhost:8080/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123",
    "firstName": "Test",
    "lastName": "User"
  }'
```

**Login:**
```bash
curl -X POST http://localhost:8080/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'
```

**Expected Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "email": "test@example.com",
  "firstName": "Test",
  "lastName": "User",
  "role": "USER",
  "message": "Login successful"
}
```

---

## Common Issues & Solutions

### Issue 1: Backend won't start
**Error:** `Cannot connect to database`
- **Solution:** Check MySQL is running and credentials are correct

### Issue 2: CORS Error
**Error:** `Access to fetch blocked by CORS policy`
- **Solution:** Check `SecurityConfig.java` has correct frontend URL (http://localhost:5173)

### Issue 3: 401 Unauthorized
**Error:** `Invalid email or password`
- **Solution:** Check if user exists in database or register first

### Issue 4: Frontend can't connect to backend
**Error:** `Failed to fetch`
- **Solution:** 
  - Check backend is running on port 8080
  - Check `authService.js` has correct API URL
  - Check browser console for errors

### Issue 5: Database not found
**Error:** `Unknown database 'carwashdb'`
- **Solution:** Database will be created automatically, but ensure MySQL is running

---

## Verification Checklist

- [ ] MySQL is running
- [ ] Backend starts without errors on port 8080
- [ ] Frontend starts without errors on port 5173
- [ ] Login page loads correctly
- [ ] Registration form works
- [ ] Login form works
- [ ] Token is stored in localStorage (check browser DevTools)
- [ ] User data is stored in localStorage
- [ ] No console errors in browser
- [ ] No errors in backend console

---

## Quick Test Commands

**Check if backend is running:**
```bash
curl http://localhost:8080/api/auth/login
# Should return: {"timestamp":"...","status":405,"error":"Method Not Allowed"}
```

**Check if frontend is running:**
```bash
curl http://localhost:5173
# Should return HTML content
```

**Check database connection:**
```bash
mysql -u root -p -e "USE carwashdb; SHOW TABLES;"
# Should show 'users' table
```


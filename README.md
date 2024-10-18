# Brogram 🗨️

Welcome to **Brogram**, an open-source social media platform designed exclusively for developers! Connect, share, and collaborate with fellow devs all around the world! 🌍

> [!TIP]
>  Love Brogram? Click "Star" at the top to support the project! 🌟

## 🛠️ Setup Guide

Follow these simple steps to get Brogram up and running on your machine! 💻

### ⚙️ Requirements

- Node.js (Make sure you have it installed! 🟢)
- MongoDB database (For data storage 🗃️)

---

### 📦 Installation Steps

01. **Clone the Repository**

First, clone this repository to your local machine:

```
git clone https://github.com/braydenidzenga/Brogram.git
```

02. **Install Dependencies**

#### Frontend
Navigate to the **frontend**  folder and install the necessary dependencies:

```
cd frontend
npm install
```
**Running frontend :**
> [!NOTE]
>  Use different Terminal Instances for frontend & api 

- For Development 🧑‍💻:
```
npm run dev
```

- For Production 🏭:
```
npm run build
```

#### Backend
Navigate to the **api** folder and install the necessary dependencies:

```
cd api
npm install
```
 **Create the **.env** File**

Next, you'll need to create an environment configuration file. In the root of the api directory, create a file called .env:

```
touch .env
```

Copy and paste the following content into the **.env** file and replace the placeholders:

```
PORT=[your-port-number]
DB=[your-mongodb-connection-string]
JWT_SECRET=[your-jwt-secret-key]
```

**Run the Program**

- For Development 🧑‍💻:
```
npm run dev
```

- For Production 🏭:
```
npm start
```

And that's it! 🎉 Brogram should now be running on your local machine. Start coding and join the conversation!



## 🫱 Contributing

We ❤️ contributions! Feel free to submit issues, fork the repo, and send pull requests. Let's build an amazing platform together!

## 📜 License

This project is open-source under the MIT License. Check out the LICENSE file for more details.

---
Let's code, connect, and collaborate! 👩‍💻👨‍💻
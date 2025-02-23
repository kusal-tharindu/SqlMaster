
# 💻 **Natural Language to SQL Query Converter**

  <img src="client/src/assets/2024-10-24 07_19_10-QueryMaster.png" alt="Download directly from github" width="900px" />
  
  <br>
</h2>

<!-- photo -->
This project is a **full-stack application** that converts **natural language queries** (in English) into **SQL queries** using **OpenAI's GPT-3.5 architecture** and its text completion API. It is designed to help users easily translate simple instructions into complex SQL queries, making database management more accessible.

The project consists of:
1. **Client**: 🖥️ A React-based frontend.
2. **Server**: 🚀 A Node.js backend powered by Express for handling requests.

---

## ✨ **Features**

- 🔍 Converts natural language input into valid SQL queries.
- 🖼️ User-friendly React frontend.
- 🔧 Scalable backend with Express and Node.js.
- 🐋 Supports containerization with **Docker** for easy deployment.

---

## 🚀 **Getting Started**

Follow these steps to clone the repository, install dependencies, and run the application on your local machine.

### 1️⃣ **Clone the Repository**

```bash
git clone https://github.com/kusal-tharindu/SqlMaster.git
cd SqlMaster
```

### 2️⃣ **Install Dependencies**

- **Client Dependencies:**  
  Navigate to the `client` folder and run:
  ```bash
  cd client
  npm install
  ```

- **Server Dependencies:**  
  Navigate to the `server` folder and run:
  ```bash
  cd ../server
  npm install
  ```

---

## 🛠️ **Running the Application**

### 1️⃣ **Run the Client (Frontend)**

Navigate to the `client` folder and start the React development server:

```bash
cd client
npm run dev
```

After starting, the development URL will appear in your terminal. Example:

```
➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

### 2️⃣ **Run the Server (Backend)**

In a new terminal, navigate to the `server` folder and start the Node.js server:

```bash
cd server
npm start
```

Example:

```
Listening on port 3002...
```

> 💡 **Note:** The above steps are for running the application locally. If you want to run it as Docker containers, follow the steps below.

---

## 🐳 **Docker Setup (Optional)**

If you prefer to run the app using Docker, follow these steps to build and deploy the **Docker images** for the client and server.

### 1️⃣ **Install Docker**

Make sure Docker is installed and running on your machine.  
🔗 [Docker Installation Guide](https://docs.docker.com/engine/install/)

Verify installation:
```bash
docker --version
```

### 2️⃣ **Code Changes**

#### Client (Frontend) Changes

```bash
cd client/src
vi App.jsx
```

Modify the `fetch` URL in `App.jsx`:
```javascript
const generateQuery = async () => {
  const response = await fetch("http://localhost:3002/generate"); // Change the URL as needed
```

#### Server (Backend) Changes

```bash
vi server/package.json
```

Remove the following line from **package.json** in the `server` directory:
```json
"start": "node index.js",
```

---

### 3️⃣ **Build and Run Docker Images**

#### **Client Image**

```bash
cd client
docker build -t <YOUR_DOCKER_USERNAME>/nlsql-client:01 .
docker push <YOUR_DOCKER_USERNAME>/nlsql-client:01
docker run -d --restart unless-stopped -p 80:80 <YOUR_DOCKER_USERNAME>/nlsql-client:01
```

#### **Server Image**

```bash
cd ../server
docker build -t <YOUR_DOCKER_USERNAME>/nlsql-server:01 .
docker push <YOUR_DOCKER_USERNAME>/nlsql-server:01
docker run -d --restart unless-stopped -p 3002:3002 <YOUR_DOCKER_USERNAME>/nlsql-server:01
```

#### **Verify Docker Images and Containers**

```bash
docker images
docker ps
```

---

## 🛠️ **Technologies Used**

- **Frontend**: React.js  
- **Backend**: Node.js with Express  
- **Containerization**: Docker  
- **API Integration**: OpenAI GPT-3.5 API

---

## 🔍 **How It Works**

1. **User Input:**  
   The user enters a natural language query in the frontend interface (React).

2. **Backend Processing:**  
   The server sends the query to the GPT-3.5 model via OpenAI’s API to generate a SQL query.

3. **SQL Query Display:**  
   The generated SQL query is returned and displayed on the frontend.

---

## 👥 **Authors and Contributors**

### 👨‍💻 **Kusal Tharindu**
- 🖥️ [Portfolio](https://kusal.dtk2globle.com/)
- 📝 [Personal Blog](https://blog.dtk2globle.com/)
- 🌐 [GitHub](https://github.com/kusal-tharindu)
- 💼 [LinkedIn](https://linkedin.com/in/kusal-tharindu)
- 🐦 [Twitter](https://twitter.com/tharindu_kusal)

### 🤝 **Contributors**

- 🧑‍💻 [Sasindu K Karunarathna](https://github.com/sasinduKKarunarathna)  
- 🧑‍💻 [Malitha Abeysinghe](https://github.com/MalithaAbey)  
- 🧑‍💻 [IMKDilshan](https://github.com/IMKDilshan)

---

## 📄 **License**

This project is licensed under the **MIT License**.  
Read the full details here: [LICENSE.md](https://github.com/kusal-tharindu/SqlMaster/blob/main/LICENSE)

---

## ⚠️ **Fair Use Act Disclaimer**

This project is for educational purposes only.  
Under the **Fair Use** policy of the Copyright Act of 1976, this project can be used for teaching, scholarship, and research purposes.

Read the full disclaimer here: [Disclaimer.md](https://github.com/kusal-tharindu/SqlMaster/blob/main/Disclaimer.md)

---

## 🎁 **Acknowledgments**

I was inspired to create this project to contribute something useful to the developer community.  
Many thanks to all contributors for making this project a reality.

---

## ☕ **Support the Project**

If you found this project useful, consider supporting it by buying me a coffee!

<a href="https://www.buymeacoffee.com/kusal26" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" height="45px"></a>

---

## 📞 **Contact Me**

Feel free to reach out if you have any questions or feedback:
- 📧 **Email:** contact@dtk2globle.com

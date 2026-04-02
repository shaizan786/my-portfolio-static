# Sajjan Sonde — Portfolio Website

A personal portfolio website for **Sajjan Sonde**, 3rd Year B.E. Computer Engineering student at Rizvi College of Engineering, Mumbai. Built with HTML, CSS, and JavaScript and deployed on Google Cloud Platform with SSL enabled.

🔗 GitHub: [github.com/shaizan786](https://github.com/shaizan786)
🔗 LinkedIn: [linkedin.com/in/sajjan-sonde-768a59286](https://in.linkedin.com/in/sajjan-sonde-768a59286)

---

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Web Server:** NGINX
- **Cloud:** Google Cloud Platform (GCP) — E2-micro VM
- **SSL:** Let's Encrypt via Certbot

---

## Deployment Guide

### Step 1 — Prepare the Repository

1. Clone or fork this repository to your local machine
2. Make your changes to `index.html`, `styles.css`, and `script.js`
3. Push the updated code to your GitHub repository

---

### Step 2 — Create a VM Instance on GCP

1. Open [https://console.cloud.google.com](https://console.cloud.google.com) and log in
2. Create a new project and attach a billing account
3. Navigate to **Compute Engine >> VM Instances**
4. Click the **Create Instance** button and configure as follows:

   | Setting | Value |
   |---|---|
   | Machine type | E2-micro |
   | OS | Ubuntu (20.04 LTS) |
   | Data Protection | No backups |
   | Networking | Allow HTTP and HTTPS |
   | Observability / Security / Advanced | No changes |

5. Click **Create** and wait for the instance to start

---

### Step 3 — Assign a Static IP

1. Search for **IP Addresses** in the GCP search bar (under VPC Networks)
2. Find the public IP assigned to your instance
3. Click the three dots under **Actions** → **Promote to static IP** and give it a name
4. Copy this static IP — you will need it for DNS setup

> ⚠️ Without promoting to static, the IP may change after a reboot and break your domain.

---

### Step 4 — Set Up DNS A Record

1. Open your domain registrar's control panel
2. Find your domain and go to DNS settings
3. Add a new **A Record**:

   | Field | Value |
   |---|---|
   | Type | A |
   | Host | @ (or your subdomain) |
   | Value | Your GCP static IP |
   | TTL | 14400 |

4. Save and wait for DNS propagation (can take a few minutes to a few hours)

---

### Step 5 — Install NGINX and Deploy Code

Connect to the VM using the **SSH** button in GCP Console, then run:

```bash
sudo apt update
sudo apt install nginx
```

Navigate to the web root, clear the default files, and clone your portfolio:

```bash
cd /var/www/html
sudo rm -rf *
sudo git clone https://github.com/shaizan786/my-portfolio-express.git .
```

Open your browser and visit `http://<your-static-ip>` and then `http://<your-domain>` to verify the site loads.

---

### Step 6 — Configure NGINX with Your Domain

Open the default NGINX config:

```bash
sudo nano /etc/nginx/sites-enabled/default
```

Go to line 46 and change:

```nginx
server_name _;
```

to:

```nginx
server_name yourdomain.com www.yourdomain.com;
```

Save with **Ctrl+O** → Enter, then exit with **Ctrl+X**.

Reload NGINX:

```bash
sudo service nginx reload
```

---

### Step 7 — Enable SSL with Certbot

Install Certbot and obtain a free SSL certificate from Let's Encrypt:

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

Follow the on-screen prompts. Certbot will automatically update your NGINX config to serve HTTPS. Certificates auto-renew every 90 days.

✅ Your portfolio is now live at `https://yourdomain.com`

---

## Project Structure

```
my-portfolio-express/
├── index.html       # Main HTML file
├── styles.css       # Stylesheet
├── script.js        # JavaScript (smooth scroll, form handling)
└── README.md        # This file
```

---

## License

© 2025 Sajjan Sonde. All rights reserved.

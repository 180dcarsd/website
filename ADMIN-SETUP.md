# Admin setup (once)

Edit the site at `yoursite/admin/`. Content lives in `content/content.js`; images you upload go to `assets/img/uploads/`.

## 1. Make a GitHub token
GitHub > Settings > Developer settings > Personal access tokens > Fine-grained tokens > Generate.
- Repository access: only the site repo
- Permissions: Contents = Read and write
- Expiry: 1 year (set a reminder; a new token means redoing step 2)

## 2. Lock it with your ID and password
Open `admin/setup.html` (on the live site, or by double-clicking it on your computer).
Fill in the repo, branch, token, an ID and a password (12+ characters; three or four random words works well).
It downloads `config.js`. Put that file in the `admin` folder, replacing the empty one, and commit it.
Then delete `admin/setup.html` from the repo.

## 3. Use it
Go to `/admin/`, log in, edit, press **Save & publish**. The site updates in about a minute.

## Moving from the GitHub Pages test to Vercel
Vercel redeploys on every commit, so the same admin works there. If the Vercel repo is a different repo, repeat step 2 for it.

## Test on GitHub Pages
- Use a separate test repo, and delete the `CNAME` file in it. If it stays, Pages sends visitors to www.180dcarsd.org.
- Repo > Settings > Pages > Deploy from branch > main > / (root).
- Site is at `https://USERNAME.github.io/REPO/`, admin at `/admin/`.

## GoDaddy
After testing: in Vercel add the domain under the project's Domains. Vercel shows the exact records. In GoDaddy DNS set what it asks for (usually `A  @  76.76.21.21` and `CNAME  www  cname.vercel-dns.com`). Remove any old records for the same names.

## Not editable yet
Home-page services list (in `script.js`), the scrolling client logos on the home page, About page text, contact form.

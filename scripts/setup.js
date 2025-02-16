import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Use INIT_CWD to get the directory where npm install was run
const destinationDir = process.env.INIT_CWD || process.cwd();

// Ensure the script is NOT running inside node_modules
if (__dirname.includes("node_modules")) {
  console.error("❌ This script should not run inside node_modules. Exiting.");
  process.exit(1);
}

const sourceDir = path.join(__dirname, "..", "templates");

// List of files to copy
const filesToCopy = [
  { src: ".env", dest: ".env" },
  { src: "apiError.js", dest: "utils/apiError.js" },
  { src: "apiResponse.js", dest: "utils/apiResponse.js" },
  { src: "app.js", dest: "app.js" },
  { src: "index.js", dest: "index.js" },
  { src: "asyncHandler.js", dest: "utils/asyncHandler.js" },
  { src: "auth.middleware.js", dest: "middleware/auth.middleware.js" },
  { src: "constants.js", dest: "config/constants.js" },
  { src: "dbConnection.js", dest: "config/dbConnection.js" },
  { src: "user.routes.js", dest: "routes/user.routes.js" },
  { src: "userAuth.controller.js", dest: "controllers/userAuth.controller.js" },
  { src: "userSchema.model.js", dest: "models/userSchema.model.js" },
];

// Function to copy files
const copyFiles = () => {
  try {
    filesToCopy.forEach((file) => {
      const srcPath = path.join(sourceDir, file.src);
      const destPath = path.join(destinationDir, file.dest);

      fs.mkdirSync(path.dirname(destPath), { recursive: true });

      if (!fs.existsSync(destPath)) {
        fs.copyFileSync(srcPath, destPath);
        console.log(`✅ Copied ${file.src} to ${file.dest}`);
      } else {
        console.log(`⚠️ Skipped ${file.src}, file already exists.`);
      }
    });

    console.log("\n🚀 LOVE-AUTH setup completed successfully!");
  } catch (error) {
    console.error("❌ Error during setup:", error.message);
    process.exit(1);
  }
};

// Only run if called directly (not inside node_modules)
if (process.env.npm_lifecycle_event === "postinstall" || process.argv[1] === fileURLToPath(import.meta.url)) {
  copyFiles();
}

export default copyFiles;

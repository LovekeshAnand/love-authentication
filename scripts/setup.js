import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get the root directory where npm install was executed
let destinationDir = process.env.INIT_CWD || process.cwd();

// Ensure the script is NOT running inside node_modules
if (destinationDir.includes("node_modules")) {
  console.error("❌ This script is running inside node_modules. Moving files outside...");
  
  // Set destinationDir to the parent directory of node_modules (move up to the project root)
  destinationDir = path.dirname(path.dirname(destinationDir));
  
  // Check if we're back in the root project directory
  if (destinationDir.includes("node_modules")) {
    console.error("❌ Could not move out of node_modules. Exiting.");
    process.exit(1);
  } else {
    console.log(`✅ Moving files outside of node_modules to ${destinationDir}`);
  }
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

      // Ensure that directories exist before copying the file
      fs.mkdirSync(path.dirname(destPath), { recursive: true });

      // Copy the file if it doesn't already exist in the destination
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

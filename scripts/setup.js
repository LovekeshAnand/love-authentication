import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let destinationDir = process.env.INIT_CWD || process.cwd();

if (destinationDir.includes("node_modules")) {
  console.error("This script is running inside node_modules. Moving files outside...");
  
  destinationDir = path.dirname(path.dirname(destinationDir));
  
  if (destinationDir.includes("node_modules")) {
    console.error("Could not move out of node_modules. Exiting.");
    process.exit(1);
  } else {
    console.log(`Moving files outside of node_modules to ${destinationDir}`);
  }
}

const sourceDir = path.join(__dirname, "..", "templates");

const filesToCopy = [
  { src: ".env", dest: ".env" },
  { src: "apiError.js", dest: "utils/apiError.js" },
  { src: "apiResponse.js", dest: "utils/apiResponse.js" },
  { src: "app.js", dest: "app.js" },
  { src: "index.js", dest: "index.js" },
  { src: "asyncHandler.js", dest: "utils/asyncHandler.js" },
  { src: "auth.middleware.js", dest: "middleware/auth.middleware.js" },
  { src: "multer.middleware.js", dest: "middleware/multer.middleware.js" },
  { src: "constants.js", dest: "config/constants.js" },
  { src: "dbConnection.js", dest: "config/dbConnection.js" },
  { src: "user.routes.js", dest: "routes/user.routes.js" },
  { src: "userAuth.controller.js", dest: "controllers/userAuth.controller.js" },
  { src: "userSchema.model.js", dest: "models/userSchema.model.js" },
];

const copyFiles = () => {
  try {
    filesToCopy.forEach((file) => {
      const srcPath = path.join(sourceDir, file.src);
      const destPath = path.join(destinationDir, file.dest);

      fs.mkdirSync(path.dirname(destPath), { recursive: true });

      if (!fs.existsSync(destPath)) {
        fs.copyFileSync(srcPath, destPath);
        console.log(`Copied ${file.src} to ${file.dest}`);
      } else {
        console.log(`Skipped ${file.src}, file already exists.`);
      }
    });

    console.log("\nLOVE-AUTH setup completed successfully!");
  } catch (error) {
    console.error("Error during setup:", error.message);
    process.exit(1);
  }
};

if (process.env.npm_lifecycle_event === "postinstall" || process.argv[1] === fileURLToPath(import.meta.url)) {
  copyFiles();
}

export default copyFiles;

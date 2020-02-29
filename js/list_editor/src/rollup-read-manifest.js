import fs from "fs";
import path from "path";


export default async function getManifest() {
    return {
        name: 'get-manifest', // this name will show up in warnings and errors
        generateBundle: async (options, bundle) => {
            const workspace = process.cwd();
            const targetDir = "./dist";
            const fileName = "manifest.json";
            const filePath = path.resolve(workspace, targetDir, fileName);
            const content = await fs.promises.readFile(filePath);
            const json = JSON.parse(content);
            options.manifest = json;
        }
    };
}

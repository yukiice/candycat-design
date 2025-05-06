import { makeInstaller } from "@candycat-design/utils";
import components from "./components";
import "@candycat-design/theme/index.css";

const installer = makeInstaller(components);


export * from "@candycat-design/components"
export default installer;

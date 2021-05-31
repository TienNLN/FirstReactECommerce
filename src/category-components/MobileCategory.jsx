import { Component } from "react";
import CategoryManager from "./CategoryManager";

class MobileCategory extends CategoryManager {
    constructor(props) {
        super(props);
    }

    getText() {
        return "Mobile";
    }
}

export default MobileCategory
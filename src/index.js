import Form from "./ui/form";
import ElementCreator from "./components/elementCreator";

(function Home () {
    const root = new ElementCreator({
        type:'div', attributeType:'id',
        attributeValue: 'root'
    });
    root.create();
    Form();
})();
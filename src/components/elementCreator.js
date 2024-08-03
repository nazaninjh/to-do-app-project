export default function ElementCreator (info) {
    const { 
        type, attributes , parent
    } = info;
    
    this.type = type;
    this.attributes = attributes;
    parent ? this.parent = parent : this.parent = document.body;
}
ElementCreator.prototype.create = function () {
    const element = document.createElement(this.type);
    if (this.attributes) {
       this.attributes.map(attribute => {
        const { type, value } = attribute;
        return element.setAttribute(type, value)
       })
        
    }
    this.parent.appendChild(element);
}
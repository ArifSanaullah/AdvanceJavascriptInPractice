function crazy() {
    console.log(this);
}
// crazy();

var snae = () => console.log(this);
snae();
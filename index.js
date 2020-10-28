function render() {
	const productsStore = localStorageUtil.getProducts();
	console.log(productsStore.length);	
	headerPage.render(productsStore.length);
	productsPage.render();
	console.log(productsStore.length);	
}
let CATALOG = [];
render();





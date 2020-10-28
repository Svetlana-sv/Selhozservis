class Header {
    handlerOpenShoppingPage() {
        shoppingPage.render();
    }

    render(count) {
        const html = `
            
                <div class="header-counter" onclick="headerPage.handlerOpenShoppingPage();">
                <img src="img/favicon.png"> ${count}
                </div>
            
        `;

        ROOT_HEADER.innerHTML = html;
    }
};

const headerPage = new Header();

const productsStore = localStorageUtil.getProducts();
headerPage.render(productsStore.length);

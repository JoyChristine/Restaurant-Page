const menu = function() {
    const mainSection = document.createElement('section');
    mainSection.classList.add('main-section');
    mainSection.innerHTML = `<div class="menu" id="menu">
    <div class="dessert">
        <img src="img/angelFoodCake.jpg" alt="">
        <p>Angel food cake, or angel cake, is a type of sponge cake made with egg whites, flour, and sugar. A whipping agent, such as cream of tartar, is commonly added. It differs from other cakes because it uses no butter. Its aerated texture comes
            from whipped egg white. Angel food cake originated in the United States and first became popular in the late 19th century. It gained its unique reputation along with its name due to its light and fluffy texture.</p>
    </div>
    <div class="dessert">
        <img src="img/1.jpg" alt="">
        <p>Angel food cake, or angel cake, is a type of sponge cake made with egg whites, flour, and sugar. A whipping agent, such as cream of tartar, is commonly added. It differs from other cakes because it uses no butter. Its aerated texture comes
            from whipped egg white. Angel food cake originated in the United States and first became popular in the late 19th century. It gained its unique reputation along with its name due to its light and fluffy texture.</p>
    </div>
    <div class="dessert">
        <img src="img/avocadoCake.jpg" alt="">
        <p>Angel food cake, or angel cake, is a type of sponge cake made with egg whites, flour, and sugar. A whipping agent, such as cream of tartar, is commonly added. It differs from other cakes because it uses no butter. Its aerated texture comes
            from whipped egg white. Angel food cake originated in the United States and first became popular in the late 19th century. It gained its unique reputation along with its name due to its light and fluffy texture.</p>
    </div>
    <div class="dessert">
        <img src="img/dadarCake.jpg" alt="">
        <p>Angel food cake, or angel cake, is a type of sponge cake made with egg whites, flour, and sugar. A whipping agent, such as cream of tartar, is commonly added. It differs from other cakes because it uses no butter. Its aerated texture comes
            from whipped egg white. Angel food cake originated in the United States and first became popular in the late 19th century. It gained its unique reputation along with its name due to its light and fluffy texture.</p>
    </div>

</div>`;
    document.body.append(mainSection);
};
export { menu };
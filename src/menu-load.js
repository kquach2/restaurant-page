import menu from './menu.png';
import cheese from './cheese.png';

const menuLoad = () => {
    const content = document.querySelector('#content');
    const heading = document.createElement('div');
    heading.id = 'menu-heading';
    const headingText = document.createElement('h1');
    headingText.textContent = 'Menu';
    heading.appendChild(headingText);

    const menuIcon = new Image();
    menuIcon.src = menu;
    heading.appendChild(menuIcon);
    content.appendChild(heading);

    const foodGrid = document.createElement('div');
    foodGrid.id = 'food-grid';

    const food1 = document.createElement('div');
    const food1Image = new Image();
    food1Image.src = cheese;
    food1.appendChild(food1Image);
    const food1Text = document.createElement('div');
    const food1NamePrice = document.createElement('h4');
    food1NamePrice.textContent = 'Cheese Pizza $5';
    food1Text.className = "pizza-text";
    food1Text.appendChild(food1NamePrice);
    const food1Desc = document.createElement('p');
    food1Desc.textContent = 'Nothing but cheese'
    food1Text.appendChild(food1Desc);
    food1.appendChild(food1Text);
    food1.className = 'pizza'
    foodGrid.appendChild(food1);

    const food2 = document.createElement('div');
    const food2Image = new Image();
    food2Image.src = cheese;
    food2.appendChild(food2Image);
    const food2Text = document.createElement('div');
    const food2NamePrice = document.createElement('h4');
    food2NamePrice.textContent = 'Cheese Pizza $5';
    food2Text.className = "pizza-text";
    food2Text.appendChild(food2NamePrice);
    const food2Desc = document.createElement('p');
    food2Desc.textContent = 'Nothing but cheese'
    food2Text.appendChild(food2Desc);
    food2.appendChild(food2Text);
    food2.className = 'pizza'
    foodGrid.appendChild(food2);

    const food3 = document.createElement('div');
    const food3Image = new Image();
    food3Image.src = cheese;
    food3.appendChild(food3Image);
    const food3Text = document.createElement('div');
    const food3NamePrice = document.createElement('h4');
    food3NamePrice.textContent = 'Cheese Pizza $5';
    food3Text.className = "pizza-text";
    food3Text.appendChild(food3NamePrice);
    const food3Desc = document.createElement('p');
    food3Desc.textContent = 'Nothing but cheese'
    food3Text.appendChild(food3Desc);
    food3.appendChild(food3Text);
    food3.className = 'pizza'
    foodGrid.appendChild(food3);

    const food4 = document.createElement('div');
    const food4Image = new Image();
    food4Image.src = cheese;
    food4.appendChild(food4Image);
    const food4Text = document.createElement('div');
    const food4NamePrice = document.createElement('h4');
    food4NamePrice.textContent = 'Cheese Pizza $5';
    food4Text.className = "pizza-text";
    food4Text.appendChild(food4NamePrice);
    const food4Desc = document.createElement('p');
    food4Desc.textContent = 'Nothing but cheese'
    food4Text.appendChild(food4Desc);
    food4.appendChild(food4Text);
    food4.className = 'pizza'
    foodGrid.appendChild(food4);

    const food5 = document.createElement('div');
    const food5Image = new Image();
    food5Image.src = cheese;
    food5.appendChild(food5Image);
    const food5Text = document.createElement('div');
    const food5NamePrice = document.createElement('h4');
    food5NamePrice.textContent = 'Cheese Pizza $5';
    food5Text.className = "pizza-text";
    food5Text.appendChild(food5NamePrice);
    const food5Desc = document.createElement('p');
    food5Desc.textContent = 'Nothing but cheese'
    food5Text.appendChild(food5Desc);
    food5.appendChild(food5Text);
    food5.className = 'pizza'
    foodGrid.appendChild(food5);

    const food6 = document.createElement('div');
    const food6Image = new Image();
    food6Image.src = cheese;
    food6.appendChild(food6Image);
    const food6Text = document.createElement('div');
    const food6NamePrice = document.createElement('h4');
    food6NamePrice.textContent = 'Cheese Pizza $5';
    food6Text.className = "pizza-text";
    food6Text.appendChild(food6NamePrice);
    const food6Desc = document.createElement('p');
    food6Desc.textContent = 'Nothing but cheese'
    food6Text.appendChild(food6Desc);
    food6.appendChild(food6Text);
    food6.className = 'pizza'
    foodGrid.appendChild(food6);

    const food7 = document.createElement('div');
    const food7Image = new Image();
    food7Image.src = cheese;
    food7.appendChild(food7Image);
    const food7Text = document.createElement('div');
    const food7NamePrice = document.createElement('h4');
    food7NamePrice.textContent = 'Cheese Pizza $5';
    food7Text.className = "pizza-text";
    food7Text.appendChild(food7NamePrice);
    const food7Desc = document.createElement('p');
    food7Desc.textContent = 'Nothing but cheese'
    food7Text.appendChild(food7Desc);
    food7.appendChild(food7Text);
    food7.className = 'pizza'
    foodGrid.appendChild(food7);

    const food8 = document.createElement('div');
    const food8Image = new Image();
    food8Image.src = cheese;
    food8.appendChild(food8Image);
    const food8Text = document.createElement('div');
    const food8NamePrice = document.createElement('h4');
    food8NamePrice.textContent = 'Cheese Pizza $5';
    food8Text.className = "pizza-text";
    food8Text.appendChild(food8NamePrice);
    const food8Desc = document.createElement('p');
    food8Desc.textContent = 'Nothing but cheese'
    food8Text.appendChild(food8Desc);
    food8.appendChild(food8Text);
    food8.className = 'pizza'
    foodGrid.appendChild(food8);

    content.appendChild(foodGrid);
}

export default menuLoad;
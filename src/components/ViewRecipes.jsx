import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const ViewRecipes = () => {
  const location = useLocation(); 
  const newRecipe = location.state?.newRecipe; 

  const initialRecipes = [
    {
      name: "Chicken Biryani",
      type: "Non-Veg",
      ingredients: ["Basmati rice", "Chicken", "Yogurt", "Onions", "Garlic", "Ginger", "Spices (Turmeric, Garam Masala, Coriander, Cumin)", "Saffron", "Mint leaves"],
      instructions: "To prepare Chicken Biryani, begin by marinating 500 grams of chicken with ½ cup of yogurt, 1 teaspoon turmeric, 2 teaspoons garam masala, 1 teaspoon coriander powder, 1 teaspoon cumin powder, and salt to taste. Let it sit for at least 1 hour for the flavors to absorb. Meanwhile, slice 2 large onions and finely chop 6 garlic cloves and a 2-inch piece of ginger. In a heavy-bottomed pan, heat 3 tablespoons of oil and sauté the onions until golden brown. Add the garlic and ginger, cooking until aromatic. Then, add the marinated chicken and cook on medium heat until the chicken is tender and the masala thickens. Separately, wash and soak 2 cups of basmati rice for 20 minutes, then parboil it with a few strands of saffron soaked in warm water. Drain the rice when it’s about 70% cooked. In a deep pot, begin layering—start with a layer of chicken, followed by a layer of rice. Repeat the process, then sprinkle chopped mint leaves and a little of the saffron water on top. Cover the pot with a tight lid and cook on low heat (dum) for 15–20 minutes to let all the flavors meld together. Serve hot with raita or salan.",
      image: "https://img.freepik.com/free-photo/view-delicious-dish-food_23-2150777655.jpg?t=st=1738074334~exp=1738077934~hmac=36a4105cb9a6ebaaff752479bb07f7fbbbda996724feee14a1f327eaa883c2ea&w=1380",
    },
    {
      name: "Pallipalayam Chicken",
      type: "Non-Veg",
      ingredients: ["Chicken", "Dry red chilies", "Shallots", "Coconut pieces", "Garlic", "Curry leaves", "Oil", "Salt"],
      instructions: "To make Pallipalayam Chicken, start by washing and cutting 500 grams of chicken (with bone) into small pieces. In the meantime, finely slice about 20 to 25 shallots, crush 10 garlic cloves, and break 12 to 15 dry red chilies into halves (deseed them if you prefer less heat). Also, slice ¼ cup of fresh coconut into thin pieces and keep two sprigs of curry leaves ready. Heat 3 tablespoons of gingelly (sesame) oil in a heavy-bottomed pan. Add the dry red chilies and roast them for a few seconds, then add the garlic, curry leaves, and shallots. Sauté everything on medium heat until the shallots turn soft and golden brown. Add the chicken pieces and salt to taste. Sauté on high heat for a few minutes until the chicken starts to brown, then reduce the heat, cover, and cook for 10–15 minutes until the chicken is tender and cooked through. Finally, add the sliced coconut pieces and stir well. Let it cook uncovered on low heat for another 5–7 minutes until the chicken is dry, the masala is well-coated, and the coconut turns slightly crisp. Serve hot with steamed rice, dosa, or parotta for an authentic Tamil Nadu experience.",
      image: "https://img.freepik.com/free-photo/side-view-stewed-meatballs-with-tomato-sauce-bell-pepper-spring-onion-mint-plate_141793-5117.jpg?t=st=1738075215~exp=1738078815~hmac=605a6d4b4841de6d33c32b5142f5ff83ea42526fc03a5bbd936a46c2bb15208b&w=996",
    },
    {
      name:"Aloo Gobi",
      type: "Veg",
      ingredients: ["Potatoes", "Cauliflower", "Onions", "Garlic", "Spices (Turmeric, Cumin, Coriander, Garam Masala)"],
      instructions: "To make Aloo Gobi, start by peeling and dicing 2 medium potatoes and cutting half a cauliflower into small florets. Finely chop 1 onion and 4 garlic cloves. In a pan, heat 2 tablespoons of oil and sauté the chopped onions until soft and golden. Add the garlic and stir for a minute until fragrant. Then, add ½ teaspoon each of turmeric, cumin, and coriander powder, along with 1 teaspoon of garam masala. Mix the spices well with the onion base. Add the potatoes and cauliflower florets, along with salt to taste and a splash of water to help with cooking. Cover the pan and cook on low to medium heat for about 15–20 minutes, stirring occasionally, until the vegetables are tender and well-coated with the spices. Garnish with fresh coriander leaves if desired and serve hot with chapati or rice.",
      image: "https://img.freepik.com/free-photo/top-view-fried-potatoes-inside-pan-with-different-seasonings-vegetables-dark-background_140725-126821.jpg?t=st=1738077012~exp=1738080612~hmac=54f83ddadef4c35c31d93d7d2cdef8325930f04bc6bff12751ca6ddb565fa200&w=996",
    },
    {
      name: "Vegetable Biryani",
      type: "Veg",
      ingredients: ["Basmati rice", "Mixed vegetables", "Onions", "Garlic", "Ginger", "Spices (Cinnamon, Cloves, Cardamom, Garam Masala)", "Saffron", "Mint leaves"],
      instructions: "To prepare Vegetable Biryani, start by washing and soaking 2 cups of basmati rice for 20 minutes. Parboil the rice with a few strands of saffron soaked in warm water and set it aside. In a large pan, heat 3 tablespoons of oil or ghee and sauté 2 sliced onions until golden brown. Add 5 finely chopped garlic cloves and 1 tablespoon of grated ginger, cooking until fragrant. Then add whole spices like 1-inch cinnamon stick, 3 cloves, 2 cardamom pods, and 1 teaspoon garam masala. Stir for a minute, then add 2 cups of chopped mixed vegetables (like carrots, beans, peas, and potatoes). Cook for 10–12 minutes, adding salt and a little water if needed, until the vegetables are tender and coated in the masala. In a deep pot, layer the cooked vegetables and the parboiled rice alternately. Sprinkle mint leaves and the remaining saffron water on the top layer. Cover with a tight lid and let it steam on low heat (dum) for 15–20 minutes. Serve hot with raita or a simple salad..",
      image: "https://img.freepik.com/free-photo/dish-with-rice_144627-18096.jpg?t=st=1738076517~exp=1738080117~hmac=606bc55971c4613fb85e54f3243dc256aeaba85396050ce218b2bb68bdcf4006&w=996"
    },
    {
      name: "Chana Masala",
      type: "Veg",
      ingredients: ["Chickpeas", "Onions", "Tomatoes", "Garlic", "Ginger", "Spices (Cumin, Coriander, Garam Masala, Chili powder)"],
      instructions: "To prepare Chana Masala, soak 1 cup of chickpeas overnight and pressure cook them with a pinch of salt until soft (or use 2 cups of canned chickpeas, drained and rinsed). In a pan, heat 2 tablespoons of oil and sauté 1 finely chopped onion until golden brown. Add 4 minced garlic cloves and 1 tablespoon of grated ginger, cooking until fragrant. Then add the spices—1 teaspoon cumin powder, 1 teaspoon coriander powder, 1 teaspoon garam masala, and ½ teaspoon chili powder. Stir well, then add 2 finely chopped tomatoes and cook until the tomatoes break down and the oil begins to separate. Add the cooked chickpeas to the mixture along with a splash of water to adjust the consistency. Let it simmer on low heat for 10–15 minutes until the chickpeas absorb the flavors and the curry thickens. Garnish with chopped coriander leaves and serve hot with rice, roti, or naan..",
      image: "https://img.freepik.com/free-psd/delicious-chickpea-curry-black-bowl-transparent-background_84443-27028.jpg?t=st=1738076600~exp=1738080200~hmac=287eab662038732170fb91f208c8117917fa868a1e79b4c919d0b83d0e7badda&w=740"
    },
    {
      name: "Butter Chicken",
      type: "Non-Veg",
      ingredients: ["Chicken", "Butter", "Tomatoes", "Onions", "Garlic", "Ginger", "Cream", "Spices (Garam Masala, Cumin, Coriander, Turmeric)"],
      instructions: "To make Butter Chicken, start by marinating 500 grams of chicken (preferably boneless) with ½ cup of yogurt, 1 teaspoon garam masala, 1 teaspoon cumin, 1 teaspoon coriander powder, ½ teaspoon turmeric, and salt. Let it rest for at least an hour. In a pan, heat 2 tablespoons of butter and sauté 1 finely chopped onion until golden. Add 4 minced garlic cloves and 1 tablespoon of grated ginger, and cook until fragrant. Add 3 finely chopped tomatoes and cook until they break down into a thick paste. Stir in 1 teaspoon of garam masala and a pinch more turmeric. Add the marinated chicken and cook until it's tender and fully cooked through. Lower the heat and add ½ cup of fresh cream, stirring well to create a rich, velvety sauce. Let it simmer for 5–10 minutes, then garnish with a drizzle of cream or a small cube of butter on top. Serve hot with naan, roti, or basmati rice..",
      image: "https://img.freepik.com/free-photo/indian-food-arrangement-high-angle_23-2148723468.jpg?t=st=1738076645~exp=1738080245~hmac=aa58c61ef8f4d7df08b6362dd89f7f5ef7a2e1588e3ed4161ba36182758a9d76&w=996"
    },
    {
      name: "Fish Curry",
      type: "Non-Veg",
      ingredients: ["Fish fillets", "Coconut milk", "Tomatoes", "Onions", "Garlic", "Ginger", "Spices (Mustard seeds, Fenugreek, Turmeric, Chili powder)"],
      instructions: "To make Fish Curry, start by heating 2 tablespoons of oil in a pan. Add 1 teaspoon of mustard seeds and ½ teaspoon of fenugreek seeds, allowing them to splutter. Then, sauté 1 finely chopped onion until soft and golden. Add 4 minced garlic cloves and 1 tablespoon of grated ginger, and cook for another minute. Add 2 chopped tomatoes, 1 teaspoon turmeric, and 1 teaspoon chili powder, and cook until the tomatoes soften and the oil begins to separate from the masala. Pour in 1 cup of coconut milk and stir well. Let the mixture simmer for 5 minutes to allow the flavors to meld. Gently add 400 grams of fish fillets (such as tilapia, salmon, or any white fish) and cook for 8–10 minutes, depending on the thickness of the fish, until the fish is tender and cooked through. Adjust the consistency of the curry by adding a little water if needed. Garnish with fresh coriander leaves and serve hot with steamed rice or roti..",
      image: "https://img.freepik.com/free-photo/top-view-delicious-fish-meal_23-2148734691.jpg?t=st=1738077094~exp=1738080694~hmac=c02542a9193854ecab4d45540528bc10c55719ec41ca69a624a2a2266a16a29a&w=826"
    },
    
    {
      name: "Spaghetti Bolognese",
      type: "Non-Veg",
      ingredients: ["Spaghetti", "Ground beef", "Tomato sauce", "Onion", "Garlic"],
      instructions: "To make Spaghetti Bolognese, begin by cooking 200 grams of spaghetti in a large pot of salted boiling water according to the package instructions, until al dente. Drain the spaghetti and set aside. While the pasta cooks, heat 2 tablespoons of oil in a large pan over medium heat. Add 1 finely chopped onion and sauté until soft and translucent, which should take about 5 minutes. Next, add 4 minced garlic cloves and cook for another 1-2 minutes, until fragrant.Add 500 grams of ground beef to the pan, breaking it apart with a spoon. Cook until the beef is browned and fully cooked through, about 6-8 minutes. Once the beef is browned, add 2 cups of tomato sauce and stir well. Season with salt, pepper, and herbs like basil or oregano, if desired. Let the sauce simmer for 15-20 minutes, allowing the flavors to blend and the sauce to thicken.Once the spaghetti is ready, combine it with the sauce, tossing well to coat the pasta. Serve the dish hot, optionally topped with freshly grated parmesan cheese and fresh basil leaves for extra flavor. This classic Spaghetti Bolognese is a comforting and satisfying meal, perfect for a family dinner or special occasion. Enjoy with a side of garlic bread or a simple salad..",
      image: "https://www.kitchensanctuary.com/wp-content/uploads/2019/09/Spaghetti-Bolognese-square-FS-0204.jpg",
    },
    {
      name: "Vegetable Pulao",
      type: "Veg",
      ingredients: ["Basmati rice", "Carrots", "Peas", "Green beans", "Onions", "Ginger", "Spices (Bay leaf, Cinnamon, Cardamom)", "Coriander leaves"],
      instructions: "To prepare Vegetable Pulao, start by washing 1 cup of basmati rice and soaking it in water for 20 minutes. While the rice soaks, chop 1 onion, 1 carrot, ½ cup of green beans, and ½ cup of peas. Heat 2 tablespoons of oil or ghee in a pan. Add 1 bay leaf, 1-inch piece of cinnamon, and 2 cardamom pods. Sauté for a minute until fragrant. Add the chopped onions and sauté until they turn golden brown. Then, add the chopped vegetables and sauté for 3–4 minutes until they start to soften. Next, drain the soaked rice and add it to the pan, stirring gently to mix it with the vegetables and spices. Pour in 2 cups of water, season with salt to taste, and bring it to a boil. Once the water starts boiling, reduce the heat to low, cover the pan, and cook for 15–20 minutes or until the rice is fluffy and the vegetables are tender. Garnish with fresh coriander leaves. Serve hot with raita, curry, or as a standalone dish.",
      image: "https://img.freepik.com/free-photo/side-view-rice-garnish-with-grilled-chicken-cucumber-carrot-bell-pepper-spring-onion_141793-5070.jpg?t=st=1738075675~exp=1738079275~hmac=3b4e7f4dd4e046be7a4fdf662479b2f59dc9b77d2c0fa58b3e87f875bb9dc337&w=996",
    },
    {
      name: "Sambar Sadham",
      type: "Veg",
      ingredients: ["Rice", "Toor dal", "Tamarind", "Onions", "Tomatoes", "Carrot", "Drumstick", "Spices (Sambar powder, Turmeric, Mustard seeds, Cumin, Fenugreek)", "Curry leaves", "Coriander leaves"],
      instructions: "Cook rice and dal separately. In a pan, sauté onions, tomatoes, carrots, drumstick, and spices. Add tamarind extract and cook until vegetables are tender. Mix the cooked rice and dal with the sambar, then garnish with coriander and curry leaves.",
      image: "https://img.freepik.com/free-photo/traditional-indian-soup-lentils-indian-dhal-spicy-curry-bowl-spices-herbs-rustic-black-wooden-table_2829-18717.jpg?t=st=1738076835~exp=1738080435~hmac=cceb264f3dea283577ffb7ed98acb87b59b9d5084c3e731f16211a5075a3c21b&w=996"
    },
    {
      name: "Curd Rice",
      type: "Veg",
      ingredients: ["Rice", "Curd (Yogurt)", "Mustard seeds", "Curry leaves", "Green chilies", "Ginger", "Coriander leaves", "Spices (Cumin, Asafoetida)"],
      instructions: "To make Sambar Sadham, start by cooking 1 cup of rice and ½ cup of toor dal separately in a pressure cooker or pot until they are soft and cooked through. While the rice and dal are cooking, heat 2 tablespoons of oil in a large pan. Add 1 teaspoon of mustard seeds, ½ teaspoon of cumin seeds, and ¼ teaspoon of fenugreek seeds. Once they splutter, add a few curry leaves and sauté for a minute. Add 1 finely chopped onion and cook until it turns golden brown. Then, add 1 chopped tomato, 1 chopped carrot, and 1 chopped drumstick (or any other preferred vegetables), and sauté for 5 minutes. Add 1 teaspoon of sambar powder, ½ teaspoon of turmeric powder, and salt to taste. Stir well, and add 1 tablespoon of tamarind extract dissolved in water. Add enough water to create a slightly thick curry consistency. Cook until the vegetables are tender and the flavors have melded together. Once the rice and dal are cooked, gently mix them with the sambar mixture. Let everything cook together for another 5-10 minutes, allowing the flavors to blend. Garnish with fresh coriander leaves and serve hot with a side of papad or pickles.",
      image: "https://img.freepik.com/premium-photo/curd-rice-dahi-bhat-chawal-with-curry-leaf-peanuts-chilli-served-bowl-moody-background-selective-focus_466689-59477.jpg?w=996"
    },
    
    
    {
      name: "Paneer Butter Masala",
      type: "Veg",
      ingredients: ["Paneer", "Tomatoes", "Cream", "Butter", "Spices (Turmeric, Garam Masala)", "Ginger", "Garlic"],
      instructions: "STo make Paneer Butter Masala, start by cutting 250 grams of paneer into cubes and set aside. Heat 2 tablespoons of butter in a pan and add 1 teaspoon of turmeric powder and 1 teaspoon of garam masala. Sauté the spices for about 30 seconds until fragrant. Add 2 finely chopped tomatoes and cook until they soften and the oil begins to separate from the mixture. Add 1 tablespoon of minced ginger and 4 minced garlic cloves, cooking for another 2 minutes until aromatic. Let the mixture cool slightly, then blend it into a smooth paste using a blender or hand blender.Return the paste to the pan, add ½ cup of cream, and stir well to combine. Cook the paste on low heat for 5-7 minutes until it thickens and becomes creamy. Add the cubed paneer to the pan, gently stirring to coat the pieces in the sauce. Let it simmer for 10 minutes, allowing the paneer to absorb the rich flavors. Garnish with a drizzle of cream and some fresh cilantro if desired. Serve hot with naan, roti, or rice for a delicious, comforting meal..",
      image: "https://img.freepik.com/free-photo/pakistani-dish-arrangement-high-angle_23-2148825115.jpg?t=st=1738075729~exp=1738079329~hmac=a571a79fea8c904a70a43858ab440980f9499010b258f888477a18d094dff346&w=996",
    },
    {
  name: "Chole Masala",
  type: "Veg",
  ingredients: ["Chickpeas", "Onions", "Tomatoes", "Ginger", "Garlic", "Spices (Cumin, Coriander, Garam Masala)", "Oil", "Cilantro"],
  instructions: "To make Chole Masala, soak 1 cup of chickpeas overnight and cook until tender. In a pan, heat 2 tablespoons of oil and add 1 teaspoon cumin seeds. Once they splutter, add 2 finely chopped onions and sauté until golden brown. Add 1 tablespoon of minced garlic and 1 teaspoon of grated ginger. Cook for a minute until aromatic. Stir in 2 chopped tomatoes and cook until the mixture softens and the oil separates. Add 1 teaspoon of coriander powder, 1 teaspoon of garam masala, and salt to taste. Mix well and cook for 2 minutes. Add the boiled chickpeas and 1 cup of water. Simmer for 10-15 minutes to allow the flavors to blend. Garnish with chopped cilantro and serve hot with bhature, roti, or rice.",
  image: "https://img.freepik.com/free-photo/bottom-view-roasted-eggplant-salad-bowl-different-spices-small-bowls-spoon-dark-table-free-space_140725-130866.jpg?ga=GA1.1.2040759086.1738073539&semt=ais_items_boosted&w=740"
},
{
    name: "Masala Dosa",
    type: "Veg",
    ingredients: ["Dosa Batter", "Potatoes", "Onions", "Mustard Seeds", "Curry Leaves", "Turmeric", "Green Chilies"],
    instructions: "To prepare Masala Dosa, start by making the potato filling. Heat some oil in a pan and add mustard seeds. Once they begin to splutter, add curry leaves, chopped green chilies, and sliced onions. Sauté until the onions turn golden brown, then add a pinch of turmeric and boiled, mashed potatoes. Mix everything well and cook for a few minutes until the flavors combine. Set this filling aside.Next, heat a dosa tawa or non-stick pan on medium heat. Pour a ladleful of dosa batter in the center and quickly spread it outward in a circular motion to form a thin crepe. Drizzle a little oil around the edges and cook until the bottom turns crisp and golden. Place a portion of the potato filling in the center of the dosa, then fold it over. Serve the hot, crispy masala dosa with coconut chutney and sambar for a delicious South Indian meal.",
    image: "https://img.freepik.com/premium-photo/masala-dosa-is-south-indian-meal-served-with-sambhar-coconut-chutney-selective-focus_466689-22919.jpg?ga=GA1.1.2040759086.1738073539&semt=ais_items_boosted&w=740"
  },
  {
    name: "Egg Curry",
    type: "Non-Veg",
    ingredients: ["Boiled Eggs", "Onions", "Tomatoes", "Ginger", "Garlic", "Spices (Turmeric, Garam Masala)", "Oil"],
    instructions: "To prepare Egg Curry, start by heating some oil in a pan and sautéing finely chopped onions until they turn golden brown. Add minced garlic and ginger, and cook for a minute until aromatic. Next, add chopped tomatoes along with turmeric and garam masala. Cook the mixture until the tomatoes break down and the oil begins to separate from the masala, indicating it's well-cooked. Gently add the boiled eggs to the pan, coating them with the flavorful curry. Let it simmer for about 10 minutes so the eggs absorb the spices. Garnish with fresh coriander leaves and serve hot with rice or roti for a hearty and satisfying meal.",
    image: "https://img.freepik.com/free-photo/green-curry-with-eggs-black-cups-with-lemon-lemongrass-chili-tomatoes_1150-25746.jpg?ga=GA1.1.2040759086.1738073539&semt=ais_items_boosted&w=740"
  },
  {
  name: "Paneer Tikka",
  type: "Veg",
  ingredients: ["Paneer", "Yogurt", "Spices (Red Chili, Garam Masala, Turmeric)", "Lemon Juice", "Bell Peppers", "Onions"],
  instructions: "To make Paneer Tikka, start by cutting paneer into medium-sized cubes. In a large mixing bowl, prepare the marinade by combining thick yogurt with red chili powder, turmeric, garam masala, lemon juice, and a pinch of salt. Mix well to form a smooth and thick marinade. Add the paneer cubes to the bowl along with chopped bell peppers and onions. Gently toss everything together so the marinade evenly coats all the pieces. Cover the bowl and let it marinate for at least 30 minutes to allow the flavors to soak in. Once marinated, thread the paneer, bell peppers, and onions onto skewers in an alternating pattern. Grill the skewers on a stovetop grill pan, in an oven, or over charcoal until the paneer is slightly charred and the vegetables are tender, turning occasionally for even cooking. Serve the hot paneer tikka with mint chutney and lemon wedges for a delicious appetizer or snack.",
  image: "https://img.freepik.com/free-photo/chicken-skewers-with-slices-apples-chili-top-view_2829-19996.jpg?ga=GA1.1.2040759086.1738073539&semt=ais_items_boosted&w=740"
},
  {
      name: "Methi Thepla",
      type: "Veg",
      ingredients: ["Whole wheat flour","Fenugreek leaves (Methi)","Green chilies","Ginger","Cumin seeds","Caraway seeds (Ajwain)","Turmeric powder","Red chili powder","Salt", "Oil"],
      instructions: "To make Methi Thepla, begin by washing and finely chopping 1 cup of fenugreek leaves (methi). In a large mixing bowl, combine 1 cup of whole wheat flour, 1 teaspoon of cumin seeds, 1 teaspoon of caraway seeds (ajwain), ½ teaspoon of turmeric powder, 1 teaspoon of red chili powder, and salt to taste. Add the finely chopped methi leaves, 1 finely minced green chili, and 1 tablespoon of grated ginger. Gradually add water, little by little, and knead the dough into a smooth and soft consistency. Once the dough is ready, divide it into small balls, about the size of a lemon.Now, roll each dough ball into a thin, round disc (approximately 6-7 inches in diameter) using a rolling pin. Heat a flat tawa or griddle on medium heat and lightly grease it with a few drops of oil. Place the rolled thepla on the hot tawa, and cook for 1-2 minutes on one side until small bubbles form. Flip it over, add a little oil, and cook until both sides are golden brown and crispy. Repeat this process for the remaining dough balls.Serve the warm Methi Theplas with yogurt, pickle, or chutney for a wholesome, healthy meal.",
      image:  "https://img.freepik.com/free-photo/healthy-food-wooden-background_23-2148305764.jpg?t=st=1744776054~exp=1744779654~hmac=fbb37401d28458a266cf4cad474b3535a8d93a3ae228c9d8f71e6e045ff0ff8d&w=826"
    },
    {
  name: "Jeera Rice",
  type: "Veg",
  ingredients: ["Basmati Rice", "Cumin Seeds", "Ghee", "Salt", "Water"],
  instructions: "To make Jeera Rice, start by heating ghee in a pan and adding cumin seeds. Let the seeds splutter to release their aroma. Then, add soaked and drained basmati rice to the pan and sauté it gently for a minute to coat the grains with the ghee and cumin flavor. Pour in the appropriate amount of water and add salt to taste. Cover the pan with a lid and cook on low heat until the rice is tender and fluffy. Once done, fluff the rice with a fork and serve hot as a flavorful side dish.",
  image: "https://img.freepik.com/premium-photo/cilantro-coriander-rice-served-ceramic-terracotta-bowl-it-s-popular-indian-chinese-recipe-selective-focus_466689-54834.jpg?ga=GA1.1.2040759086.1738073539&semt=ais_items_boosted&w=740"
},
{
  name: "Tandoori Chicken",
  type: "Non-Veg",
  ingredients: ["Chicken", "Yogurt", "Ginger-Garlic Paste", "Lemon Juice", "Spices (Tandoori Masala, Chili Powder)"],
  instructions: "To prepare Tandoori Chicken, begin by making a marinade with yogurt, ginger-garlic paste, lemon juice, tandoori masala, chili powder, and salt. Coat the chicken pieces thoroughly with this spiced yogurt mixture and let them marinate for at least 2 hours, preferably overnight, to absorb the flavors. This marination helps tenderize the chicken and infuses it with rich, smoky spices. Once marinated, grill or bake the chicken at a high temperature until it is cooked through and has a nice charred exterior. Serve the hot tandoori chicken with fresh mint chutney and lemon wedges for a delicious and flavorful meal. The charred edges and juicy interior make it a perfect dish for any occasion.",
  image: "https://img.freepik.com/free-photo/high-angle-shot-delicious-hot-spicy-dish-called-drums-heaven-table_181624-50861.jpg?ga=GA1.1.2040759086.1738073539&semt=ais_items_boosted&w=740"
},
{
  name: "Pav Bhaji",
  type: "Veg",
  ingredients: ["Potatoes", "Tomatoes", "Onions", "Green Peas", "Capsicum", "Butter", "Pav Bhaji Masala", "Pav Buns"],
  instructions: "To make Pav Bhaji, start by boiling and mashing potatoes, green peas, and capsicum until smooth. In a pan, heat butter and sauté finely chopped onions and tomatoes until soft. Add pav bhaji masala and mix well, then add the mashed vegetables and cook the mixture until it thickens and all flavors blend together. This slow cooking helps develop the rich, spicy taste that pav bhaji is famous for. Meanwhile, toast the pav buns with a little butter until golden and crispy. Serve the hot bhaji with the toasted pav, garnished with chopped onions and lemon wedges for a delicious and satisfying meal. The combination of buttery buns and spicy vegetable stew makes it a popular street food favorite.",
  image: "https://img.freepik.com/premium-photo/delicious-homemade-vegetable-stew-served-with-soft-dinner-rolls-culinary-delight_165789-2886.jpg?ga=GA1.1.2040759086.1738073539&semt=ais_items_boosted&w=740"
},
{
    name: "Idli",
    type: "Veg",
    ingredients: ["Parboiled Rice", "Urad Dal", "Fenugreek Seeds", "Salt", "Water"],
    instructions: "To prepare Idli, start by soaking parboiled rice and urad dal separately for about 4–6 hours, adding a few fenugreek seeds to the dal for better fermentation. Once soaked, grind both ingredients to a smooth, thick batter using a little water. Mix the batters together with salt and leave it to ferment overnight or for 8–10 hours in a warm place until it rises and turns slightly airy. After fermentation, gently stir the batter and pour it into greased idli molds. Steam the idlis for about 10–12 minutes or until they are soft and fluffy. Serve hot with coconut chutney and sambar for a classic South Indian breakfast.",
    image: "https://img.freepik.com/premium-photo/idli-with-sambar-coconut-chutney-blue_136354-210.jpg?ga=GA1.1.2040759086.1738073539&semt=ais_items_boosted&w=740"
  },
   {
    name: "Uttapam",
    type: "Veg",
    ingredients: ["Idli/Dosa Batter", "Onions", "Tomatoes", "Green Chilies", "Coriander Leaves"],
    instructions: "PTo make Uttapam, start by heating a non-stick tawa or griddle and lightly greasing it with oil. Pour a ladleful of idli/dosa batter onto the hot surface and gently spread it into a thick circle. Quickly sprinkle finely chopped onions, tomatoes, green chilies, and coriander leaves evenly over the top. Drizzle a little oil around the edges and cook on medium heat until the base turns golden and crispy. Flip and cook the other side lightly if desired. Serve hot with coconut chutney and sambar for a delicious South Indian meal.",
    image: "https://img.freepik.com/premium-photo/cheese-uttapam-pizza-south-indian-food-with-twist-served-with-sambar-chutney_466689-89664.jpg?ga=GA1.1.2040759086.1738073539&semt=ais_items_boosted&w=740"
  },
    {
    name: "Medu Vada",
    type: "Veg",
    ingredients: ["Urad Dal", "Black Pepper", "Ginger", "Green Chilies", "Curry Leaves", "Salt", "Oil"],
    instructions: "To prepare Medu Vada, soak urad dal for about 4–5 hours, then grind it into a smooth, thick batter using minimal water. Add finely chopped ginger, green chilies, curry leaves, crushed black pepper, and salt to the batter, mixing well. Wet your hands, take a portion of batter, shape it into a round patty with a hole in the center (like a doughnut). Gently slide it into hot oil and deep fry on medium heat until golden brown and crisp on both sides. Drain excess oil using paper towels. Serve hot with coconut chutney and sambar for a classic South Indian treat.",
    image: "https://img.freepik.com/premium-photo/vada-medu-vadai-with-sambar-chutney-popular-south-indian-snack-breakfast_466689-1595.jpg?ga=GA1.1.2040759086.1738073539&semt=ais_items_boosted&w=740"
  }    
  ];

  const [searchTerm, setSearchTerm] = useState("");
const [filterType, setFilterType] = useState("All");

const recipes = newRecipe
  ? [newRecipe, ...initialRecipes]
  : initialRecipes;

const filteredRecipes = recipes.filter(
  (recipe) =>
    recipe.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase()) &&
    (filterType === "All" ||
      recipe.type === filterType)
);

return (

  <div className="view-recipes">

    <center>

      <h1>View Recipes</h1>

      {/* ===== SEARCH ===== */}

      <div className="search-container">

        <input
          type="text"
          placeholder="Search recipes..."
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
          className="search-input"
          style={{ width: "50%" }}
        />

      </div>

      {/* ===== FILTER ===== */}

      <div
        className="filter-container"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "10px",
        }}
      >

        <label>
          <input
            type="radio"
            name="filterType"
            value="All"
            checked={filterType === "All"}
            onChange={() =>
              setFilterType("All")
            }
          />
          All
        </label>

        <label>
          <input
            type="radio"
            name="filterType"
            value="Veg"
            checked={filterType === "Veg"}
            onChange={() =>
              setFilterType("Veg")
            }
          />
          Veg
        </label>

        <label>
          <input
            type="radio"
            name="filterType"
            value="Non-Veg"
            checked={filterType === "Non-Veg"}
            onChange={() =>
              setFilterType("Non-Veg")
            }
          />
          Non-Veg
        </label>

      </div>

      {/* ===== RECIPES ===== */}

      <div className="recipes-list">

        {filteredRecipes.map((recipe, index) => (

          <div
            key={index}
            className="recipe-card"
          >

            <div className="recipe-content">

              {/* IMAGE */}

              <img
                src={recipe.image}
                alt={recipe.name}
                className="recipe-image"
              />

              {/* DETAILS */}

              <div className="recipe-details">

                <h2>{recipe.name}</h2>

                {/* INGREDIENTS */}

                <h3>Ingredients</h3>

                <ul>
                  {recipe.ingredients.map(
                    (ingredient, idx) => (

                      <li key={idx}>
                        {ingredient}
                      </li>

                    )
                  )}
                </ul>

                {/* INSTRUCTIONS */}

                <h3>Instructions</h3>

                <p>{recipe.instructions}</p>

                {/* ===== RATING ===== */}

                <div className="rating-section">

                  <h3>
                    Rate This Recipe
                  </h3>

                  <div className="stars">

                    {[1, 2, 3, 4, 5].map(
                      (star) => (

                        <span
                          key={star}
                          className="star"
                          onClick={() =>
                            alert(
                              `You rated ${star} stars ⭐`
                            )
                          }
                        >
                          ⭐
                        </span>

                      )
                    )}

                  </div>

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

    </center>

  </div>
);
}

export default ViewRecipes;
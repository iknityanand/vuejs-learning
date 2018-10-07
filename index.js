var card = new Vue({
    el: "#card",
    data: {
        title: "Tasks",
        items: []
    },
    methods:{   
        addItem: () => {
            var input = document.getElementById('itemForm');
            if(input.value !== ''){
                this.card.items.push({ text: input.value})
                input.value='';
            }
        },
        deleteItem: (index)=>{
            this.card.items.splice(index, 1);
        }
    }  
});
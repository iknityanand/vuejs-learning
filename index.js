var card = new Vue({
    el: "#card",
    data: {
        title: "Tasks",
        items: []
    },
    methods: {
        addItem: () => {
            var input = document.getElementById('itemForm');
            if (input.value !== '') {
                this.card.items.push({ text: input.value })
                input.value = '';
            }
        },
        deleteItem: (index) => {
            this.card.items.splice(index, 1);
        }
    },
    filters: {
        capitalize: (value) =>{
            if(!value) return '';
            value = value.toString();
            return value.charAt(0).toUpperCase() + value.slice(1);
        },
        undercase: (value)=>{
            if(!value) return '';
            value = value.toString();
            return value.charAt(0).toLowerCase() + value.slice(1);
        }
    }
});
const GroupReducer =(state=groupsDefaultState,action)=>{
    switch(action,type){
        case "ADD_NEW_GROUP":
            return{...state,               //(...) is denfined by spread operator
                gropus:[action.group]
            }                   
    }
};


const groupsDefaultState ={
    gropus:[
        {name:"Redux Practicle",image:"Assets/image1.jpg",desc:"This Is First Group Created With Redux"},
        {name:"Redux Developers",image:"Assets/image1.jpg",desc:"Redux Is Very Helpful For Developers"},
        {name:"Redux sessions",image:"Assets/image1.jpg",desc:"Very Intresting Sessions"},
    ]
}
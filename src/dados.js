const produtos = [
    {
        id: 1,
        nome: "Spicy Burguer",
        descricao: "Hamburguer de 250g, queijo, tomate, alface e cebola",
        preco: 24.90,
        foto: "https://jornadajs-food.s3.amazonaws.com/spicy.png"
    },
    {
        id: 2,
        nome: "Sanduba",
        descricao: "Sanduiche natural, alface, tomate, pão integral e arégano",
        preco: 22.00,
        foto: "https://jornadajs-food.s3.amazonaws.com/sanduba.png"
    },
    {
        id: 3,
        nome: "Super Burguer",
        descricao: "Hamburguer de 300g, molho, queijo, tomate, alface e cebola",
        preco: 29.90,
        foto: "https://jornadajs-food.s3.amazonaws.com/super.png"
    },
    {
        id: 4,
        nome: "Mega",
        descricao: "Hamburguer de 300g, maionese, queijo, tomate, alface e cebola",
        preco: 34.90,
        foto: "https://jornadajs-food.s3.amazonaws.com/mega.png"
    },
    {
        id: 5,
        nome: "Penne",
        descricao: "Penne ao molho especial de tomates rústicos,ervas aromáticas e cebola",
        preco: 27.00,
        foto: "https://jornadajs-food.s3.amazonaws.com/penne.png"
    },
    {
        id: 6,
        nome: "Fritas",
        descricao: "Batata frita crocante com molho especial de maionese da casa",
        preco: 14.90,
        foto: "https://jornadajs-food.s3.amazonaws.com/fritas.png"
    },
    {
        id: 7,
        nome: "Coca-cola Lata",
        descricao: "Coca-cola em lata de 300ml, trincado de gelada pra você",
        preco: 9.90,
        foto: "https://jornadajs-food.s3.amazonaws.com/coca.png"
    }
]

const pedidos = [
    {id_pedido: 541560, dt: "26/02/2024", total: 14.70},
    {id_pedido: 541561, dt: "26/02/2024", total: 150.60},
    {id_pedido: 541562, dt: "26/02/2024", total: 10.50},
    {id_pedido: 541563, dt: "26/02/2024", total: 50.40}
];

const carrinho = [
    {
        id: 1,
        nome: "X-Tudo",
        preco: 20.00,
        foto: "https://jornadajs-food.s3.amazonaws.com/spicy.png",
        qtd: 3
    },
    {
        id: 2,
        nome: "Sanduba",
        preco: 15.00,
        foto: "https://jornadajs-food.s3.amazonaws.com/sanduba.png",
        qtd: 2
    }
]

export { produtos, pedidos, carrinho}
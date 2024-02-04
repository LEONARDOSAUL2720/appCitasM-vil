mongosh para inicializar

-- visualizar los docuemntos insertados
db.Libros.find().pretty()

-- ordenar los docuemntos por orden ascendente
db.Libros.find().sort({ codigo: 1 }).pretty()

-- actualizar docuemtos de una colección
db.Libros.update({campo: valor}, {$set: {nuevo_campo: nuevo_valor}}, {multi: true})

-- eliminar documentos de una colección 
db.nombre_de_la_coleccion.remove({campo: valor})
 
-- crear indices de una colección 1indica orden ascendente y -1 desendemnte
db.Libros.createIndex({codigo: 1}, {name: "indice_codigo"})
-> asi se manda a llamar 
db.Libros.find().hint("indice_codigo")



use prueba

db.createCollection("Libros")

db.Libros.insertMany([
   { 
      codigo: 1,
      nombre: "El principito",
      autor: "Luna",
      editoriales: ['EDI1', 'EDI1']
   },
   { 
      codigo: 2,
      nombre: "Cien años de soledad",
      autor: "Gabriel García Márquez",
      editoriales:['Simon']
   },
   { 
      codigo: 3,
      nombre: "1984",
      autor: "George Orwell",
      editoriales: ['Seix ', 'Barral']
   },
   { 
      codigo: 4,
      nombre: "El señor de los anillos",
      autor: "Tolkien",
      editoriales: ['Minotauro']
   },
   { 
      codigo: 5,
      nombre: "Harry Potter y la piedra filosofal",
      autor: "Rowling",
      editoriales: ['Salamandra']
   },
   { 
      codigo: 6,
      nombre: "Matar un ruiseñor",
      autor: "Harper Lee",
      editoriales: [' JB', 'Lippincott']
   },
   { 
      codigo: 8,
      nombre: "El Gran Gatsby",
      autor: "F. Scott Fitzgerald",
      editoriales: ["Charles Scribner's Sons"]
   },
   { 
      codigo: 9,
      nombre: "Don Quijote de la Mancha",
      autor: "Miguel de Cervantes Saavedra",
      editoriales: ['Penguin Clásicos']
   },
   { 
      codigo: 10,
      nombre: "Orgullo y prejuicio",
      autor: "Jane Austen",
      editoriales: ['Ediciones Cátedra']
   }
   ])

   db.Libros.insertMany([
   { 
      codigo: 11,
      nombre: "En el camino",
      autor: "Jack Kerouac",
      editoriales: ['Anagrama']
   },
   { 
      codigo: 12,
      nombre: "Los juegos del hambre",
      autor: "Suzanne Collins",
      editoriales: ['Molino']
   },
   { 
      codigo: 13,
      nombre: "El código Da Vinci",
      autor: "Dan Brown",
      editoriales: ['Plaza & Janés']
   },
   { 
      codigo: 14,
      nombre: "La Sombra del Viento",
      autor: "Carlos Ruiz Zafón",
      editoriales: ['Penguin Random House']
   },
   { 
      codigo: 15,
      nombre: "Mujer en punto cero",
      autor: "Nawal El Saadawi",
      editoriales: ['Ediciones del Oriente y del Mediterráneo']
   },
   { 
      codigo: 16,
      nombre: "El Aleph",
      autor: "Jorge Luis Borges",
      editoriales: ['Editorial Losada']
   },
   { 
      codigo: 17,
      nombre: "Las uvas de la ira",
      autor: "John Steinbeck",
      editoriales: ['Viking Press']
   },
   { 
      codigo: 18,
      nombre: "La ladrona de libros",
      autor: "Markus Zusak",
      editoriales: ['Editorial Lumen']
   },
   { 
      codigo: 19,
      nombre: "Anna Karenina",
      autor: "León Tolstói",
      editoriales: ['Ediciones Akal']
   },
   { 
      codigo: 20,
      nombre: "El perfume",
      autor: "Patrick Süskind",
      editoriales: ['Seix Barral']
   },
])



-- INDIVIDUALES 

db.Libros.insert({
    codigo: 1,
    nombre: "El principito",
    autor: "Luna",
    editoriales: ['EDI1', 'EDI1']
})


db.Libros.insert({
    codigo: 2,
    nombre: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    editoriales:['Simon']
})


db.Libros.insert({
    codigo: 3,
    nombre: "1984",
    autor: "George Orwell",
    editoriales: ['Seix ', 'Barral']
})


db.Libros.insert({
    codigo: 4,
    nombre: "El señor de los anillos",
    autor: "Tolkien",
    editoriales: ['Minotauro']
})


db.Libros.insert({
    codigo: 5,
    nombre: "Harry Potter y la piedra filosofal",
    autor: "Rowling",
    editoriales: ['Salamandra']
})


db.Libros.insert({
    codigo: 6,
    nombre: "Matar un ruiseñor",
    autor: "Harper Lee",
    editoriales: [' JB', 'Lippincott']
})


db.Libros.insert({
    codigo:7,
    nombre: "Etica a Nicómaco", 
    autor: "Aristoteles", 
    editoriales: ['Planeta', 'Siglo XXI','Paidos' ]
})

db.Libros.insert({
    codigo: 8,
      nombre: "El Gran Gatsby",
      autor: "F. Scott Fitzgerald",
      editoriales: ["Charles Scribner's Sons"]
})


db.Libros.insert({
    codigo: 9,
      nombre: "Don Quijote de la Mancha",
      autor: "Miguel de Cervantes Saavedra",
      editoriales: ['Penguin Clásicos']
   
})


db.Libros.insert({
    codigo: 10,
      nombre: "Orgullo y prejuicio",
      autor: "Jane Austen",
      editoriales: ['Ediciones Cátedra']
})


db.Libros.insert({
    codigo: 11,
      nombre: "En el camino",
      autor: "Jack Kerouac",
      editoriales: ['Anagrama']
})


db.Libros.insert({
    codigo: 12,
      nombre: "Los juegos del hambre",
      autor: "Suzanne Collins",
      editoriales: ['Molino']
})


db.Libros.insert({
    codigo: 13,
    nombre: "El código Da Vinci",
    autor: "Dan Brown",
    editoriales: ['Plaza & Janés']
})


db.Libros.insert({
    codigo: 14,
    nombre: "La Sombra del Viento",
    autor: "Carlos Ruiz Zafón",
    editoriales: ['Penguin Random House']
})


db.Libros.insert({
    codigo: 15,
    nombre: "Mujer en punto cero",
    autor: "Nawal El Saadawi",
    editoriales: ['Ediciones del Oriente y del Mediterráneo']
})


db.Libros.insert({
    codigo: 16,
      nombre: "El Aleph",
      autor: "Jorge Luis Borges",
      editoriales: ['Editorial Losada']
})


db.Libros.insert({
    codigo: 17,
      nombre: "Las uvas de la ira",
      autor: "John Steinbeck",
      editoriales: ['Viking Press']
})

db.Libros.insert({
    codigo: 18,
    nombre: "La ladrona de libros",
    autor: "Markus Zusak",
    editoriales: ['Editorial Lumen']
})

db.Libros.insert({
    codigo: 19,
      nombre: "Anna Karenina",
      autor: "León Tolstói",
      editoriales: ['Ediciones Akal']
})

db.Libros.insert({
    codigo: 20,
    nombre: "El perfume",
    autor: "Patrick Süskind",
    editoriales: ['Seix Barral']
})


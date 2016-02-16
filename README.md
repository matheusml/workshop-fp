Workshop de Programação Funcional
=================

1) Clone o projeto
```
git clone git@github.com:matheusml/workshop-fp.git
```

2) Instale o Mocha
```
npm install -g mocha
```

3) Rode os testes
```
mocha
```

Ajuste os blocos de código no arquivo ```test.js``` para que os testes passem.

Os ajustes devem seguir duas regras:

1) Não é permitido alterar dados externos à função.

```javascript
var name = "Matheus";

// NÃO PODE
var helloName = function() {
    name = "Olá " + name;
    return name;
};

// PODE
var helloName = function() {
    return "Olá " + name;
};
```

2) While/For não podem ser usados. 
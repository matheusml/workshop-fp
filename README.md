Workshop de Programação Funcional
=================

**1) Clone o projeto**
```
git clone git@github.com:matheusml/workshop-fp.git
```

**2) Instale as dependências**
```
npm install
```

**3) Rode os testes**
```
mocha
```

Ajuste os blocos de código no arquivo ```test.js``` para que os testes passem.

Todos os ajustes devem ser feitos criando funções puras.

Funções puras:

1. Não criam side-effects

2. O output é gerado apenas pelo(s) input(s)

3. Sempre retorna o mesmo resultado dados os mesmos parâmetros

Exemplo:


```javascript
var name = "Matheus";

// impura
var helloName = function() {
    name = "Olá " + name;
    return name;
};

// pure
var helloName = function() {
    return "Olá " + name;
};
```

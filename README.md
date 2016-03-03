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

Os ajustes devem seguir essas regras:

**1) Não modificar dados externos.**

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

**2) While/For não podem ser usados**

**3) Deixe todos os inputs/outputs das funções explícitos como parâmetros**
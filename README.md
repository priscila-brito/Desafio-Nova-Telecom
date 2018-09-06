# Desafio-Nova-Telecom

A empresa de telefonia Nova Telcom, especializada em chamadas de longa distância nacional, vai colocar um novo produto no mercado chamado FaleMais.
Normalmente um cliente Nova Telcom pode fazer uma chamada de uma cidade para outra pagando uma tarifa fixa por minuto, com o preço sendo prédefinido
em uma lista com os códigos DDDs de origem e destino:

Origem	Destino	  $/min
011	      016	    1.90
016	      011	    2.90
011	      017	    1.70
017	      011	    2.70
011	      018	    0.90
018	      011	    1.90


Com o novo produto FaleMais da Nova Telcom o cliente adquire um plano e pode falar de graça até um determinado tempo (em minutos) e só paga os minutos excedentes. Os minutos excedentes tem um acrescimo de 10% sobre a tarifa normal do minuto. Os planos são:
FaleMais 30 (30minutos), 
FaleMais 60 (60 minutos) e 
FaleMais 120 (120 minutos).

A Nova Telcom, preocupada com a transparência junto aos seus clientes, quer disponibilizar uma página na web onde o cliente pode calcular o valor da ligação. Ali, o cliente pode escolher os códigos das cidades de origem e destino, o tempo da ligação em minutos e escolher qual o plano FaleMais. 

O sistema deve mostrar dois valores:
(1) o valor da ligação com o plano e
(2) sem o plano.

O custo inicial de aquisição do plano deve ser desconsiderado para este problema.

Ex:

Origem  Destino   Tempo   Plano FaleMais ComFaleMais SemFaleMais
011       016       20      FaleMais 30     $ 0,00     $ 38,00
011       017       80      FaleMais 60    $ 37,40    $ 136,00
018       011      200      FaleMais 120  $ 167,20    $ 380,00
018       017      100      FaleMais 30 



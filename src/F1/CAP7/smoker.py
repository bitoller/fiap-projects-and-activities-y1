smoking_time = float(input("Digite o número em anos que você fuma: "))
cigarette_value = float(input("Digite o valor atual do maço de cigarro: "))
how_many_cigarettes = float(input("Digite a quantidade média de maços que você fuma por dia: "))
years_in_days = smoking_time * 365
wasted_amount = (cigarette_value * how_many_cigarettes) * years_in_days
if wasted_amount < 20000:
    print(f"Com o valor R$ {wasted_amount:.2f}, você poderia ter dado entrada em um carro.")
elif wasted_amount > 20000 and wasted_amount < 50000:
    print(f"Com o valor R$ {wasted_amount:.2f}, você poderia ter comprado um carro popular usado.")
else:
    print(f"Com o valor R$ {wasted_amount:.2f}, você poderia ter comprado um carro zero.")
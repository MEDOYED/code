#!/bin/bash

# Witaj! To jest prosty kalkulator.
echo "Witaj! To jest prosty kalkulator."
# Poproś użytkownika o wprowadzenie pierwszej liczby
echo "Wprowadź pierwszą liczbę:"
read num1

# Poproś użytkownika o wybór operacji
echo "Wprowadź operację (+, -, *, /):"
read op

# Poproś użytkownika o wprowadzenie drugiej liczby
echo "Wprowadź drugą liczbę:"
read num2

# Wybór operacji na podstawie podanego operatora
case $op in
  +)
    # Dodawanie
    result=$(echo "$num1 + $num2" | bc)
    ;;
  -)
    # Odejmowanie
    result=$(echo "$num1 - $num2" | bc)
    ;;
  '*')
    # Mnożenie
    result=$(echo "$num1 * $num2" | bc)
    ;;
  /)
    # Dzielenie z walidacją dzielenia przez zero
    if [ "$num2" -ne 0 ]; then
      result=$(echo "scale=2; $num1 / $num2" | bc)
    else
      # Komunikat o błędzie dla dzielenia przez zero
      echo "Błąd: dzielenie przez zero jest niemożliwe."
      exit 1
    fi
    ;;
  *)
    # Komunikat o błędzie dla nieprawidłowej operacji
    echo "Nieprawidłowa operacja."
    exit 1
    ;;
esac

# Wyświetlenie wyniku
echo "Wynik: $result"

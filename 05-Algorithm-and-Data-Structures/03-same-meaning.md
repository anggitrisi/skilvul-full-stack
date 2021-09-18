INPUT kata 

PANJANG_KATA = LEN KATA 

iterationMin = PANJANG_KATA - 1
iterationPlus = 0

output = TRUE

WHILE iteration >= 0
  IF KATA[iterationPlus] IS NOT KATA[iterationMin] THEN
      output = FALSE
  ENDIF
  iterationMin--
  iterationPlus++
   DISPLAY kata[iteration]
   iteration = iteration + 1

DISPLAY "SELESAI"
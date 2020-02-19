function roll(attacks, damage, modifier)
{
  sum = 0;
  for (var i = 0; i < attacks; i++)
    {
      sum += Math.floor(Math.random()*damage)+modifier+1;
    }
  return sum;
};

sum1 = 0;
sum2 = 0;

for (var x = 0; x < 50; x++)
  {
    sum1 += roll(2, 6, 3);
    sum2 += roll(1, 8, 5);
  }
console.log(`1 attack 2d6 +3 bonus ${sum1}`);
console.log(`1 attack 1d8+2 +3 bonus ${sum2}`);

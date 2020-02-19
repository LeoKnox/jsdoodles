function roll(attacks, damage, modifier)
{
  sum = 0;
  for (var i = 0; i < attacks; i++)
    {
      sum += Math.floor(Math.random()*damage)+modifier+1;
    }
  return sum;
}

for (var x = 0; x < 50; x++)
  {

  }
x = roll(1, 10, 0);
console.log(`number ${x}`);

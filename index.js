function shout(string)
{
   return string.toUpperCase();
}

function whisper(string)
{
   return string.toLowerCase();
}
function logShout(string)
{
   const spy = shout(string);
   console.log(spy);
}
function logWhisper(string)
{
   const spy = whisper(string);
   console.log(spy);
}
function sayHiToHeadphonedRoommate(string)
{
   if(string === whisper(string))
   {
      return 'I can\'t hear you!'
   }
   else if(string === shout(string))
   {
      return 'YES INDEED!'
   }
   else if(string === 'Let\'s have dinner together!')
   {
      return "I would love to!";
   }
}
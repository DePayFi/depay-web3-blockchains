var ethereum = {
  name: 'ethereum',
  id: '0x1',
  label: 'Ethereum',
  logo: 'data:image/png;base64,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'
};

var bsc = {
  name: 'bsc',
  id: '0x38',
  label: 'Binance Smart Chain',
  logo: 'data:image/png;base64,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'
};

var polygon = {
  name: 'polygon',
  id: '0x89',
  label: 'Polygon',
  logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIABAMAAAAGVsnJAAAAGFBMVEVHcEzZvfrQr/nEmvevdvShXvGSRO+NPO5VmlSmAAAAB3RSTlMAGThfi7/qvWAYyAAADJxJREFUeNrsnU1z2zYURUFB6dpTs107tTnZqp1K2kZeSNtGnpjbZKwY+9YU/n6pTOIh04qmiQsQj7hnmUUmPKF48fDxoAghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQghRKls+fuNWpchsa5+5U+kxK22DvUqNbGdbbFRirGyb40IlRWF/pLpSCXFjbdIGLo39Hw4XKhFmX5//vzyoNGgHYHphmG3tOY5JhGErABMMw0YAJhkFue3maeJRMDf2BQ5qyuizAZBGZdgOwPTC8GsF+DLH39VEaQVggmHYCsAEw/BcAKZSF+kzAZhKXdQMgBSjIOvx/JOeJNza13J8rybE0r6eakJhWNghPE0mDM8GYCKVYTsA0wvDdgWYXhi2BwDpheG5KdBk6qIzFWAydVFhXalER0Fu3ZE8SVgHIAC5k4R1AECQGoYZ6PnFhuHWopAZhkuLQ2IYugeg7LoIEYBNHoQZwASg3ChABWCTD0oOs53FI2j7SLayPpAzSdg/AB5rpheGvZ//yx8X9etyfT+xMMxNz9/07ffHuS6nNEmoez9/86M5ncqwdwBuhsVm7IdLsr7/l/uhA6fIo2A19MecTyMMl8M/58UUouDGJdBX8qMgd3qLs95REOvC+cy4rfzPSuEz5WvXGT5tRBeGc/fCPhf9CuwAY7lC8FdAQ9Z5ekbBPyo+3kFe3r5REGFhXGIq+p5R8JeKDY1a4NBG5m/gV9isXt5LpYqNHW5mu5BYFGYGOIbvEwWfVFxo5NpOnyj4W8XFG2gVq8uX/zoVFz+5B+DrTtdVKi7eAQKwyS/ShkJr9B6PQlgMlJAAbG2wnJKAOw/z65EVhAa/00+bqQh4uvAxxRhZOWRQAdikmISA48LPMoMYAXtPe+2lCHjytdQqRcDC11SzEAHOMzdr4QKcx2tatgDnF6B+BUQLAPwr55IFHBFLWKVgAYBfQD3VIFgA5B+pBQtwzoATmUe5OIzHebu1WAGQT0A94SpWwGcFYS5WAGjSJjNSBUC+gTWlVAGIYdCJnVABkHHgibVQAaAUrPcepC7gjVABsAXc5AXMKYACKIACKIACKIACXikg+/m3t6h6RKCA7M/70/n0uzAK4hNwc/+9JAnSeCE6ActGWR7ivHFsAorQzTciE5DjtunEKqDzmbSBbdSKVsCmc7N5+JOGoQXcdm4sGqFhf2ABd51by8Y4cx5WwKHzwI2H/XqRCejce1vgtuzHKqDzk56P1LA/oICqOwBHaj8STsBx0xkAwINLkQr40HneDnh0LVIB+84AwB3ejFVA5wMsccd3YxVwuHBu4uOpNg4joPMjdmnHvMotiIDqyrnvgLfaOISA48K984S3MAwhYIO6yMJHGAYQsFfu3Wf8dWn2LwDSf8hfGHoX8ODcdsRvMy7fAjp/tnMzfpdmzwKqK/RNTugw9CugWuD7eIPD0K+A96gA9BeGXgU499xBnuqPTUARyf09YwnITSSXNowkQJtY7u8ZR4DzRRa4MBxFQOZ+kQUsDEcRgLjIAmVgDAGYm5xAq6YjCEDdZISZKA4vYA67yQgShsEFaNjzY8IwtIC6AsSBqI0DCwDf5ARYNQ0rADAAQIdhUAEZ7ipHWG0cVABiAIQOw5ACMAMgcG0cUAD2KktUGIYTkPdPty8fPz7++Ie+thAFE9B7AFjdvj19L6+3YWpjr2eHhwyADs/BdlOGCMNAAnQ5oMa7LAOEodf+AY0ZoEFPoo3/MDQhmj9nu4Hvcu6/MvTaQ+R5ADj4a5Z7XzUN0ehl61DcFb7D0GcfoW8sne5kXHmOgn/ZO4Pmtm0gCi8I6u5UsHttZsz4mqYVdW6bEPc4Ce7JNPgDifD3aymWhkolmyLeggS53w/wmM8m3i5AvOVMkvpBFfcaK8u7EHJmie24jv39C8c605IxTW6H8dFWrn1gHGPFHHnX/fl/A/yQ1zABUIuAdpC9LRO28AxwYcwU3b6+IA+rws/Afm2+VFki5WAtfc02zc9zJIs/0uDqWGW5lkG2ZOltAQQ08MKFBxhm+LBli5PBnnJqz+MDHvg6HaE9uIQtPcs4Q8+wxwA0wDaGxQg9z3azsgF/D6TiWAQ8y3azqmEG2KZmmOfoWTZbK5wBtlENfpKZByxP+A7wHMrBSyHPsNlaxneA58sBtA046F/o0QAAHeB5dwVP9LTId3RHYeEG2MaABYDPG1Q184FWhRUAPXGSXrEYYJsaKsACVanuDYDHAI//x5AClKBe5RHjE3zWUFigABpq1tolufShPU4AcsBTp22dAhnm/+xCAxRgHb9jd6ABd8BPKI0T4Abn2CtmA2xxjRNAw2q224QfuCoHE4Bcp93G51/apWc3wPYqgBPgLnThc3SbEv8xRxuNE0BDPkAoXOIIAAcTgCzi8KZh64DPcIMTYAFo3lapDPBAiROAXPQfz6QzwD3K4wQoY+vX0qczwAMWJwCt4zoY7bg74FPcAQUoop6gcCkLgAMLoABU+v7HGKpJWgAc0EgBqOq/itfQM9DuFFABqOrr49eJOuATNgAVgOp+VlD61AXAAYcVQNk+VqAd/gy0KxYrwAWL+RXIPkYmAGl/6aWO5TAG+MgaLUD3Ld3NhzcvXvxy+9EPY4BsAtBt6Mzmq08ddZBAAJ6rjQwGwCYAx+VWrufnEQB+vRvZAacQID7hJ4UBcgqAjXhgi0NmFAAYchKir3YPIgAs5ib6DHQoAXD33GFbwIkFQJkhmwGyC4DJ+uAzQHYBIGk30C3g1AIgygF4BHJSAeITr1g64IQCnDDDoWPQEwtA1XgNMI0AVI/WABMJQM1YDTCVAP/rjRmuwYxagAczZOgAFYFIIABpBzfA4h2BSCEAGQ+Od1MWls6QRAC6BhtgjYunSCMAVVADrID5HIkEoBoY8mmQASWpBFANLNnO+BwFeDBD0Baw9tCImmQCUIH5Crhw2IyedALQ0iMMsAGHFCUUgAzgDLRBpzSlFICqaANcwWOqkgrwvBlunn7+a3xOV1oBlI3qAI3PXQAqXIwBOoaktsQCkHYRBsgRVZdaACp97w6QJasvuQBkeneAExGAql5fwa7CZASgukcHWEUn3YxIANVcvAVs4qN+RiQAKXfhGaj20xKg5WgdDRAQ9jQqAUj7i54fkXY1LgHI+O5noDUk7mtkApBxYc/9FT2JnaQApD+FHf/+TTRLAYiWbz9+fPuGaLYC/EAEEAFEABFABBABRAARQAQYRgD41VkGLGgKwqQEgA3yAl+fZ8FiIvBPAw5QYMFCwp9Po7ARGjxYSPhzihAVJizjJLMyWwHip3fsuMlWgA1BWGcrAMgHXb4CQFZBDYzT48MyjfB5YJGxAJBQKZuxAIhSqMCFqnJiucZY0U3WAmzifQAYrMzJVgCWYrDERWuzYrmy9WzmAoTPXDeZchFg8xr6mUp+AoTvV+iP1TITIHy5Qn+umJkA4T38g9XMBAjvIV9pZSzA5i/wAjhCAdbwmAFlwbPGeLmDB03UYUoChG9XQAPAbbbg+BWctmY4hm9zssDm7WnPMHmZlTIgA5cKxzJ/npMi+sL1kQFwzB1mxgMzd44NgHFqPhIbHzpx+uoR104LmpvEk8xGZgJEJSp7e+nDA/jB09woRPLAowHkuAQQrRHZE7u7WlkuAUQLSPpIE3bkVgZtUR6QP7MKIdc3gOhVfALRoQPKrBNq1+8x5YAJQ03ywXAXmUKm/WhybJlTiMKX0waY+T8AURWTRKgsKMZqSGKeoQblGA5K4XqnsVaoHMNh0b5nHJ/xoBzDoTEXKIAQbnxUoSvff6c9SwfKMRwDq9CVzf1L2qJWfgIG0CuZc/Phnz/+fOdRQb4jAT/CKQcDBMRUQ/aTxgF4hNOeb+M2QLYRTpkUANCpFagj9gGBjXDKygA5JzpmYYD4EU5JZrkxoZBWwDrLjQtgOTDqDjj6kGtiBshghpkZINwM2We5cYKYZzjSPfBkZphdAQCeZ5hglhsv2s3RAGHzDLM1QJAZZmyAEDNMNMuNn9X4pnknppmjAUZvFGeyBczWGWazBcxkhhMoAI4xPgBnueVIFQJsllueVBPeAkb3xhMywGMznO4WMNQMs9wCBprhaL8CRFD6eXTA5zEz6YDPU83SANus5miAbVQzRwNso9w8OuCnyoG5dIDn0H6OBtjG+Hl0wOepZtIBn6eeYQHwkxnO0QCPT03naIDHZjjdLeCOCnz6uud+js8vCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCP+1B4cEAAAAAIL+v7a7AQAAAAAAAAAAACZ3ytyh8egOIwAAAABJRU5ErkJggg=='
};

let all = [ethereum, bsc, polygon];

let Blockchain = {

  all: all,

  findById: function(id){
    let fixedId = id;
    if(fixedId.match('0x0')) { // remove leading 0
      fixedId = fixedId.replace(/0x0+/, '0x');
    }
    return all.find((blockchain)=>{ return blockchain.id == fixedId })
  },

  findByName: function(name){
    return all.find((blockchain)=>{ return blockchain.name == name })
  }
};

export { Blockchain };

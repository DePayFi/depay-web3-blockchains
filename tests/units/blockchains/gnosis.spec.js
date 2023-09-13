import Blockchains from 'src';

describe('gnosis', () => {
  
  it('provides basic structured data', () => {
    let blockchain = Blockchains.findByName('gnosis');
    expect(blockchain.name).toEqual('gnosis');
    expect(blockchain.id).toEqual('0x64');
    expect(blockchain.networkId).toEqual('100');
    expect(blockchain.namespace).toEqual('eip155');
    expect(blockchain.label).toEqual('Gnosis');
    expect(blockchain.fullName).toEqual('Gnosis Chain');
    expect(blockchain.logo != undefined).toEqual(true);
    expect(blockchain.logoBackgroundColor).toEqual('#406958');
    expect(blockchain.currency.logo).toEqual('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALsAAAC7CAMAAAAKTh9YAAAAYFBMVEVHcEz////////////////////////////////////j++ma6qVj5nsl5lAK4zpA6mXO79aD8Zyr87uCvq0J2TkItEkOhl4EeVsKzSwLrxMNtQpjsZG42dEeuxyF2oU6wzjPwJjeAAAACnRSTlMAEUB9r9j/YO+Kf6/iMwAABD1JREFUeAHU1EESQjEMAlBIAq33v7ArV7+OLss7AZOB4IDVI/kW0nQRf+Ca7QvNwg/s7VtpGJP8oPFNybdT4aidoPHEcYZn6ymnEEOjH8KPk0zeTI+DLacpfMhpxKTGnFtDB9o8/Jisw8uxh1/OtGIrYw9Ah9pEOVWhnaoxTvWCnErR2Z3rzX59JMYOAkEYXr1gRJfIzP1PalbOpZm2aEf+tcKnCCz7bS37si/7si/7si/7si/7srvRHAE5kJHdbV4wkn076Q9RMMLu04fYnceT/An9JnhMkr19Ezwvvvee73ieOL1dfdN15yQlwas2S7vbgTn4iLfaDO0emIPPeLtgZt+AOfhcQHJGdieYg88VLG9k98AUfG7gBRu7YAo+9wpeNLEnYAY+915wkIndQ4Xn9IajgoV9hwbP6b3iqGRhF5zH537VHi3swGl87tft3tB+Ap/7Z9lFhef0z3hndmjwnP4Z32qEAs/po4//Rwao8JzeC3hiMyeACs/ppnMCUlThOf3wxjurObAKz+kHNz5arT0CNHhO5zde7NZ8UYXn9N4K2Utnt8NzOsFL+Kuz2+EJneA5nduN8bmTWsXzKqNzuyX+FZ3rL43Sud0Un/txtV7KqNY+6Hq7Kb71Gxt0W7seX5od/Z6a+8BuGASCMMwraRK4103A9z9leq+Q3zCYC+h7oy7tbr6d4zGd2zme04Ed4AEd2AEe0Kmd4wGd2jke0Kmd4wGd2jke0Kmd4wGd2jke0Kmd4wGd2Tl+B+jQzvH7j/ThnNub4Xd7Rud2gLc9pyM7wO9sz+nEDvA7e8G/0vX2IeTan/DXPdWL+cwD/hl/c3r2lT2u7XbWk31aYt9vesp9yD5Xn1ZPx7svtNtMYwfX9/hqjwAvuq8awIufZwzgxc+RZgAvfn43gBe/N5lxPLAD+sTs2HgnS53jnS51jHfC1CneKVOHeCdNneGdNnWEd+LUCd6pUwd4p04d4J06dYB3tekAL64nSAAvr+PgeGYHdI6ndkDneGoHdI4HdkAvxw/V7IsiegU8sIdSejk+VbIvyumveBY8twdQh51A8PL691x8PBf3HRD8oO33QPhR2mfD8EnZ3wTxXthXRvFe18+H8anbPsqkOVfnnJ6DF/RmPdE5vs69aQiYnoH3rXuzXukcP6jmE3C8734uxAgfgSvM4+D4RcV37SmgZ+BT6/kz0yd6KT5+kcex9bel+fDPupXP+MOs8byl6esGYfRxbDPnanG0OVf+8ODeH9Ks5f+mE50vJlp37d23EQQhFATRr6Yg/4RPuSe9o6tmIni7gN2222677bbbbrvttttuu5sw/7EP1j7kfhO6m5Wbak90Jw7d54NeGsV9jb0y1B+f+P5qpHB08XvD8M4zrq9N7pqje/L8jj/twXa8XOl4uSoe4/363RnvlyOo/LE1R8JnZfywrB7pGLY0Xa/gV5AhY9e5oJHCAAAAAElFTkSuQmCC');
    expect(blockchain.currency.name).toEqual('xDAI');
    expect(blockchain.currency.symbol).toEqual('xDAI');
    expect(blockchain.currency.decimals).toEqual(18);
    expect(blockchain.currency.address).toEqual('0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE');
    expect(blockchain.wrapped.logo).toEqual('data:image/png;base64,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');
    expect(blockchain.wrapped.address).toEqual('0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d');
    expect(blockchain.stables.usd).toEqual(['0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE', '0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83']);
    expect(blockchain.explorer).toEqual('https://gnosisscan.io');
    expect(blockchain.endpoints).toEqual([
      'https://rpc.gnosis.gateway.fm',
      'https://rpc.gnosischain.com',
      'https://gnosis.blockpi.network/v1/rpc/public'
    ]);
    expect(blockchain.explorerUrlFor({
      transaction: { id: '0x1907a9841e7abbc08e63586e5c9abbf7d0d42c5dc4a371304f439e2f949f51f' }
    })).toEqual('https://gnosisscan.io/tx/0x1907a9841e7abbc08e63586e5c9abbf7d0d42c5dc4a371304f439e2f949f51f')
    expect(blockchain.explorerUrlFor({
      transaction: '0x1907a9841e7abbc08e63586e5c9abbf7d0d42c5dc4a371304f439e2f949f51f'
    })).toEqual('https://gnosisscan.io/tx/0x1907a9841e7abbc08e63586e5c9abbf7d0d42c5dc4a371304f439e2f949f51f')
    expect(blockchain.explorerUrlFor({
      token: '0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb'
    })).toEqual('https://gnosisscan.io/token/0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb')
    expect(blockchain.explorerUrlFor({
      address: '0x08B277154218CCF3380CAE48d630DA13462E3950'
    })).toEqual('https://gnosisscan.io/address/0x08B277154218CCF3380CAE48d630DA13462E3950')
    expect(blockchain.zero).toEqual('0x0000000000000000000000000000000000000000');
    expect(blockchain.maxInt).toEqual('115792089237316195423570985008687907853269984665640564039457584007913129639935');
  });
});

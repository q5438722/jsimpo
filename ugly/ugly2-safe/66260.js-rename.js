  function chives(squid, rook) {
    return prairie_dog.read(squid, rook);
  }
  function bean_sprout(woodcock, antelope, goose) {
    var baboon; // a
    var bat; // i
    var bison; // n
    var tarsier; // f
    var cat; // s
    var weasel; // o
    var beaver; // u
    var komodo_dragon; // p
    var armadillo; // c
    var woodpecker; // v
    var quelea; // d
    var butterfly; // l
    var oyster; // y
    var stingray; // w
    var dragonfly; // S
    var finch; // h
    var meerkat; // b
    var alligator; // k
    var kookabura; // B
    var human; // g
    var reindeer; // m
    var elk; // E
    var ape; // I
    var dinosaur; // P
    var kouprey; // H
    
      antelope = new dogfish({
      buffer : antelope
    });
    baboon = antelope.readCString();
    raccoon.strictEqual(baboon, termite, "bad magic string");
    bat = antelope.readString();
    bison = antelope.readString();
    tarsier = antelope.readBuffer();
    cat = antelope.readInt();
    if (cat !== 1)
    {
      throw new Error('OpenSSH-format key file contains multiple keys: this is unsupported.');
    }
    weasel = antelope.readBuffer();
    if (woodcock === "public")
    {
      raccoon.ok(antelope.atEnd(), "excess bytes left after key");
      return mantis.read(weasel);
    }
    beaver = antelope.readBuffer();
    raccoon.ok(antelope.atEnd(), "excess bytes left after key");
    komodo_dragon = new dogfish({
      buffer : tarsier
    });
    switch (bison) {
      case "none":
        if (bat !== "none")
        {
          throw new Error('OpenSSH-format key uses KDF "none" but specifies a cipher other than "none"');
        }
        break;

      case "bcrypt":
        armadillo = komodo_dragon.readBuffer();
        woodpecker = komodo_dragon.readInt();
        quelea = boar.opensshCipherInfo(bat);
        if (dunlin === undefined)
        {
          dunlin = require("bcrypt-pbkdf");
        }
        if (typeof goose.passphrase === "string")
        {
          goose.passphrase = chinchilla.from(goose.passphrase, "utf-8");
        }
        if (! chinchilla.isBuffer(goose.passphrase))
        {
          throw new snail.KeyEncryptedError(goose.filename, "OpenSSH");
        }
        butterfly = new Uint8Array(goose.passphrase);
        oyster = new Uint8Array(armadillo);
        stingray = new Uint8Array(quelea.keySize + quelea.blockSize);
        dragonfly = dunlin.pbkdf(butterfly, butterfly.length, oyster, oyster.length, stingray, 
        stingray.length, 
        woodpecker);
        if (dragonfly !== 0)
        {
          throw new Error('bcrypt_pbkdf function returned failure, parameters invalid');
        }
        stingray = chinchilla.from(stingray);
        finch = stingray.slice(0, quelea.keySize);
        meerkat = stingray.slice(quelea.keySize, quelea.keySize + quelea.blockSize);
        alligator = llama.createDecipheriv(quelea.opensslName, finch, meerkat);
        alligator.setAutoPadding(false);
        human = [];
        alligator.once("error", function (echidna) {
          if (echidna.toString().indexOf("bad decrypt") !== -1)
          {
            throw new Error('Incorrect passphrase supplied, could not decrypt key');
          }
          throw echidna;
        });
        alligator.write(beaver);
        alligator.end();
        while ((kookabura = alligator.read()) !== null)
          human.push(kookabura);
        beaver = chinchilla.concat(human);
        break;

      default:
        throw new Error('OpenSSH-format key uses unknown KDF "' + bison + '"');
      
    }
    antelope = new dogfish({
      buffer : beaver
    });
    reindeer = antelope.readInt();
    elk = antelope.readInt();
    if (reindeer !== elk)
    {
      throw new Error('Incorrect passphrase supplied, could not decrypt key');
    }
    ape = {
      
    };
    dinosaur = mantis.readInternal(ape, "private", antelope.remainder());
    antelope.skip(ape.consumed);
    kouprey = antelope.readString();
    dinosaur.comment = kouprey;
    return dinosaur;
  }
  function broccoflower(owl, gaur) {
    var locust; // t
    var magpie; // a
    var snake; // i
    var hummingbird; // n
    var sheep; // f
    var goldfinch; // s
    var swan; // o
    var oryx; // u
    var turtle; // p
    var cormorant; // c
    var cattle; // d
    var tiger; // l
    var lion; // y
    var frog; // w
    var skunk; // S
    var lemur; // h
    var goat; // b
    var wolf; // k
    var gnat; // B
    var quail; // g
    var porpoise; // m
    var chamois; // E
    var otter; // I
    var sand_dollar; // P
    var jaguar; // H
    var dugong; // q
    var water_buffalo; // z
    
      if (mink.isPrivateKey(owl))
      locust = owl.toPublic();
    else
      locust = owl;
    magpie = "none";
    snake = "none";
    hummingbird = chinchilla.alloc(0);
    sheep = {
      blockSize : 8
    };
    if (gaur !== undefined)
    {
      goldfinch = gaur.passphrase;
      if (typeof goldfinch === "string")
        goldfinch = chinchilla.from(goldfinch, "utf-8");
      if (goldfinch !== undefined)
      {
        raccoon.buffer(goldfinch, "options.passphrase");
        raccoon.optionalString(gaur.cipher, "options.cipher");
        magpie = gaur.cipher;
        if (magpie === undefined)
          magpie = "aes128-ctr";
        sheep = boar.opensshCipherInfo(magpie);
        snake = "bcrypt";
      }
    }
    if (mink.isPrivateKey(owl))
    {
      swan = new dogfish({
        
      });
      oryx = llama.randomBytes(4).readUInt32BE(0);
      swan.writeInt(oryx);
      swan.writeInt(oryx);
      swan.write(owl.toBuffer("rfc4253"));
      swan.writeString(owl.comment || "");
      turtle = 1;
      while (swan._offset % sheep.blockSize !== 0)
        swan.writeChar(turtle++);
      swan = swan.toBuffer();
    }
    switch (snake) {
      case "none":
        break;

      case "bcrypt":
        cormorant = llama.randomBytes(16);
        cattle = new dogfish({
          
        });
        cattle.writeBuffer(cormorant);
        cattle.writeInt(16);
        hummingbird = cattle.toBuffer();
        if (dunlin === undefined)
        {
          dunlin = require("bcrypt-pbkdf");
        }
        tiger = new Uint8Array(goldfinch);
        lion = new Uint8Array(cormorant);
        frog = new Uint8Array(sheep.keySize + sheep.blockSize);
        skunk = dunlin.pbkdf(tiger, tiger.length, lion, lion.length, frog, frog.length, 
        16);
        if (skunk !== 0)
        {
          throw new Error('bcrypt_pbkdf function returned failure, parameters invalid');
        }
        frog = chinchilla.from(frog);
        lemur = frog.slice(0, sheep.keySize);
        goat = frog.slice(sheep.keySize, sheep.keySize + sheep.blockSize);
        wolf = llama.createCipheriv(sheep.opensslName, lemur, goat);
        wolf.setAutoPadding(false);
        quail = [];
        wolf.once("error", function (sea_urchin) {
          throw sea_urchin;
        });
        wolf.write(swan);
        wolf.end();
        while ((gnat = wolf.read()) !== null)
          quail.push(gnat);
        swan = chinchilla.concat(quail);
        break;

      default:
        throw new Error("Unsupported kdf " + snake);
      
    }
    porpoise = new dogfish({
      
    });
    porpoise.writeCString(termite);
    porpoise.writeString(magpie);
    porpoise.writeString(snake);
    porpoise.writeBuffer(hummingbird);
    porpoise.writeInt(1);
    porpoise.writeBuffer(locust.toBuffer("rfc4253"));
    if (swan)
      porpoise.writeBuffer(swan);
    porpoise = porpoise.toBuffer();
    if (mink.isPrivateKey(owl))
      chamois = "OPENSSH PRIVATE KEY";
    else
      chamois = "OPENSSH PUBLIC KEY";
    otter = porpoise.toString("base64");
    sand_dollar = otter.length + otter.length / 70 + 18 + 16 + chamois.length * 2 + 10;
    porpoise = chinchilla.alloc(sand_dollar);
    jaguar = 0;
    jaguar = 0 + porpoise.write("-----BEGIN " + chamois + "-----\n", 0);
    for (; dugong < otter.length; )
    {
      water_buffalo = dugong + 70;
      if (water_buffalo > otter.length)
        water_buffalo = otter.length;
      jaguar += porpoise.write(otter.slice(dugong, water_buffalo), jaguar);
      porpoise[jaguar++] = 10;
    }
    jaguar = jaguar + porpoise.write("-----END " + chamois + "-----\n", jaguar);
    return porpoise.slice(0, jaguar);
  }
  var raccoon; // assert
  var hamster; // asn1
  var chinchilla; // Buffer
  var ibex; // algs
  var boar; // utils
  var llama; // crypto
  var capybara; // Key
  var mink; // PrivateKey
  var prairie_dog; // pem
  var mantis; // rfc4253
  var dogfish; // SSHBuffer
  var snail; // errors
  var dunlin; // bcrypt
  var termite; // MAGIC
  
  module.exports = {
    read : read,
    readSSHPrivate : readSSHPrivate,
    write : write
  };
  raccoon = require("assert-plus");
  hamster = require("asn1");
  ibex = require("../algs");
  boar = require("../utils");
  llama = require("crypto");
  capybara = require("../key");
  mink = require("../private-key");
  prairie_dog = require("./pem");
  mantis = require("./rfc4253");
  dogfish = require("../ssh-buffer");
  snail = require("../errors");
  
---
date: 2024-02-12
tags:
  - theory
---

Zero knowledge Succinct Non-interactive Argument of Knowledge. Further explained in [[ZK]].

The usual zkSNARK psuedocode I will use throughout this wiki is roughly Pythonic, with some simple typing:

```
proof ProofName:
	public:
		int a
		str b
	private:
		int c
		str d
	checks:
		str e == hash(d)
		c == a+1
		b == hash(e, e)
```

There are public inputs and private inputs involved in a zkSNARK. There is also commonly a notion of "outputs", but those can also be thought of as public inputs that are checked against.

Each zkSNARK proceeds through a number of checks and then outputs a valid proof. If any of the checks fail, there is no proof. I define more variables in the checks that are not explicit inputs for ease of circuit description.

It's worth noting [circom](https://github.com/iden3/circom) has an extremely similar syntax to this, with some other choices for ease of use and exporting of code. People say we need better DSLs than circom, but honestly, I think it's more than enough for most useful proofs. Halo2 and PIL seem necessary for zkEVMs, but I am quite bearish on zkVMs in general. I have a fairly strong hunch that making proofs of general code (Rust, WASM) is NOT going to usher in some new wave of applications. I think most of the useful proofs have already been written in circom or Halo2, it's just VERY hard to design apps that use them well.
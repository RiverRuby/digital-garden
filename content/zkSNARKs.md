Zero knowledge Succinct Non-interactive Argument of Knowledge. Further explained in [[ZK]].

The usual zkSNARK psuedocode I will use throughout this garden is Pythonic:

```
proof ProofName:
	public:
		int a
		str b
	private:
		int c
		str d
	checks:
		b === hash(d)
		c === a+1
```

There are public inputs and private inputs involved in a zkSNARK. There is also a notion of "outputs", but those can also be thought of as public inputs that are checked against. The zkSNARK proceeds through a number of checks and then outputs a valid proof. If the checks fail, there is no proof.
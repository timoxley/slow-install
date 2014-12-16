# slow-install

This npm package takes a configurable amount of time to install, 10 seconds by default.
Useful for testing scripts sensitive to `npm install` time.

You may pass configuration to `slow-install` via environment variables, see
below:

```
> npm install slow-install
Installing for 10 seconds...
9 seconds left.
8 seconds left.
7 seconds left.
6 seconds left.
5 seconds left.
4 seconds left.
3 seconds left.
2 seconds left.
1 seconds left.
Done.
>

> SLOW_INSTALL_TIME=3 npm install slow-install
Installing for 3 seconds...
2 seconds left.
1 seconds left.
0 seconds left.
Done.

> SLOW_INSTALL_DISABLE=true npm install
>

> SLOW_INSTALL_TIME=3 SLOW_INSTALL_SILENT=true npm install
# no output, waits for 3 seconds
>
```

# License

MIT

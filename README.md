# Login App José

Formulario de inicio de sesión hecho con HTML, CSS y JavaScript para el taller de control de versiones.

## Estrategia de ramas

Usamos GitHub Flow.

- La rama main siempre queda estable.
- Cada funcionalidad se desarrolla en una rama corta que sale de main, por ejemplo feature/formulario-login.
- Los cambios se integran a main con un Pull Request que revisa un compañero.
- Cuando el Pull Request pasa la verificación automática de GitHub Actions y es aprobado, se fusiona y la rama se borra.

### Por qué la elegimos

Somos un equipo pequeño y el proyecto es una aplicación web sencilla. Git Flow tiene demasiadas ramas, como develop, release y hotfix, para algo tan pequeño. Trunk-based pide pruebas automáticas muy sólidas que todavía no tenemos. GitHub Flow es simple, obliga a que otra persona revise los cambios y funciona bien con la integración continua.

## Convención de commits

Seguimos Conventional Commits con los prefijos feat, fix, docs, style, refactor y ci.
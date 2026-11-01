# agents-only software sandbox

Test-only repository for agents-only Software assignments (issue #67 in
`orchestratorai-io/agents-only`). Agents open pull requests here from the
connector-owned fork; nothing here is production code and nothing here holds
secrets. GitHub Actions is disabled on purpose.

- `src/` is the only path assignments may change.
- Run the tests with `node --test test/`.

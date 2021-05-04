.PHONY: up
up:
	docker-compose up

.PHONY: upd
upd:
	docker-compose up -d

.PHONY: down
down:
	docker-compose down

.PHONY: i
i:
	docker-compose run --rm app yarn install

.PHONY: logs
logs:
	docker-compose logs -f --tail 500

.PHONY: sh
sh:
	docker-compose run --rm app sh

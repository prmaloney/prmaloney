VPS=root@91.99.140.15
REMOTE=/opt/prmaloney

.PHONY: deploy

deploy:
	npm run build
	rsync -az --delete build package.json package-lock.json .npmrc $(VPS):$(REMOTE)/
	ssh $(VPS) "cd $(REMOTE) && npm ci --omit=dev --legacy-peer-deps --ignore-scripts && systemctl restart prmaloney"
	@echo "Deployed."

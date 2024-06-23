// routes/subscriberRoutes.js
"use strict";

/**
 * Listing 26.1 (p. 380)
 * @TODO: Subscriber 라우트의 subscriberRoutes.js로의 이동
 */
const router = require("express").Router(),
  rankingsController = require("../controllers/rankingsController");

/**
 * Subscribers
 */
router.get("/", rankingsController.index, rankingsController.indexView); // index 라우트 생성
router.get("/new", rankingsController.new); // 생성 폼을 보기 위한 요청 처리
router.post(
  "/create",
  rankingsController.create,
  rankingsController.redirectView
); // 생성 폼에서 받아온 데이터의 처리와 결과를 사용자 보기 페이지에 보여주기
router.get("/:id", rankingsController.show, rankingsController.showView);
router.get("/:id/edit", rankingsController.edit); // viewing을 처리하기 위한 라우트 추가
router.put(
  "/:id/update",
  rankingsController.update,
  rankingsController.redirectView
); // 편집 폼에서 받아온 데이터의 처리와 결과를 사용자 보기 페이지에 보여주기
router.delete(
  "/:id/delete",
  rankingsController.delete,
  rankingsController.redirectView
);

module.exports = router;

$(document).ready(function() {

	

	$('.filter1').click(function() {
		// 선택된 버튼의 클래스에 clicked 추가
		$(this).addClass('clicked');
		// 다른 filter1 클래스 버튼들은 clicked 해제
		$('.filter1').not(this).removeClass('clicked');
		updateSubtypeButtons();

	});

	$('.filter2').click(function() {
		// 선택된 버튼의 클래스에 clicked 추가
		$(this).addClass('clicked');
		// 다른 filter2 클래스 버튼들은 clicked 해제
		$('.filter2').not(this).removeClass('clicked');
		updateSubtypeButtons();

	});

	$('.filter3').click(function() {
		// 선택된 버튼의 클래스에 clicked 추가
		$(this).addClass('clicked');
		// 다른 filter3 클래스 버튼들은 clicked 해제
		$('.filter3').not(this).removeClass('clicked');

	});

	const subtypeButtons = {
		dog: {
			food: ['전체', '습식사료', '소프트사료', '건식사료'],
			snack: ['전체', '수제간식', '껌', '사시미/육포'],
			item: ['전체', '배변용품', '장난감']
		},
		cat: {
			food: ['전체', '주식캔', '파우치', '건식사료'],
			snack: ['전체', '간식캔', '동결건조', '스낵'],
			item: ['전체', '낚시대/레이져', '스크래쳐/박스']
		}
	};

	function updateSubtypeButtons() {
		// 현재 선택된 버튼 확인
		const isDogActive = $('#강아지').hasClass('clicked');
		const isCatActive = $('#고양이').hasClass('clicked');
		const isFoodActive = $('#사료').hasClass('clicked');
		const isSnackActive = $('#간식').hasClass('clicked');
		const isItemActive = $('#용품').hasClass('clicked');

		// 세부 버튼 초기화
		$('#category2').empty();

		// 조건에 따라 세부 버튼 추가
		if (isDogActive) {
			if (isFoodActive) {
				addSubtypeButtons(subtypeButtons.dog.food);
			} else if (isSnackActive) {
				addSubtypeButtons(subtypeButtons.dog.snack);
			} else if (isItemActive) {
				addSubtypeButtons(subtypeButtons.dog.item);
			}
		} else if (isCatActive) {
			if (isFoodActive) {
				addSubtypeButtons(subtypeButtons.cat.food);
			} else if (isSnackActive) {
				addSubtypeButtons(subtypeButtons.cat.snack);
			} else if (isItemActive) {
				addSubtypeButtons(subtypeButtons.cat.item);
			}
		}

		// 첫 번째 버튼 ('전체')을 기본으로 활성화
		$('#category2 button').first().addClass('clicked');
	}

	function addSubtypeButtons(buttons) {
		buttons.forEach(buttonText => {
			$('#category2').append(`<button type="button" class="filter3" id="${buttonText}">${buttonText}</button>`);
		});
	}

});
// Nội dung tiếng Việt do người dùng cung cấp ngày 13/11/2026.
// Giữ đủ từng mục, kể cả câu lặp trong danh sách; chỉ bỏ số thứ tự,
// cú pháp Markdown, liên kết và ký tự khoảng trắng vô hình.

const generalTruths = `
Nếu bạn có thể tàng hình trong một ngày, điều đầu tiên bạn sẽ làm là gì?
Bí mật lớn nhất mà bạn từng giấu bố mẹ là gì?
Loại nhạc nào khiến bạn cảm thấy xấu hổ nhất khi nghe?
Điều gì ở bản thân mà bạn yêu thích nhất?
Nếu một thần đèn ban cho bạn ba điều ước, bạn sẽ ước điều gì và tại sao?
Nếu bạn chỉ được phép xem phim hài lãng mạn hoặc phim kinh dị trong suốt quãng đời còn lại, bạn sẽ chọn thể loại nào và tại sao?
Nơi kỳ lạ nhất mà bạn từng đi vệ sinh là ở đâu?
Bạn đã bao giờ "bỏ rơi" ai đó mà không hề báo trước chưa?
Ai trong số các cầu thủ sẽ sống sót sau một cuộc tận thế zombie và ai sẽ là người đầu tiên bị loại?
Trước đây bạn đã từng dùng lý do gì để trì hoãn kế hoạch của mình?
Bạn đã từng ngủ lâu nhất bao lâu?
Hãy đọc to tin nhắn cuối cùng bạn gửi cho người bạn thân nhất hoặc người yêu của mình.
Điều gì khiến bạn khó chịu nhất?
Lần cuối bạn nói dối là khi nào?
Bạn sẽ mang theo năm thứ gì đến một hòn đảo hoang?
Điều đáng xấu hổ nhất bạn từng làm trong một buổi hẹn hò là gì?
Bạn thấy mình giống người nổi tiếng nào nhất?
Mỗi ngày bạn chụp bao nhiêu ảnh tự sướng?
Có một điều mà bạn sẵn sàng xếp hàng một tiếng đồng hồ để được trải nghiệm?
Khoảng thời gian dài nhất bạn từng không tắm là bao lâu?
Bài hát nào được phát nhiều nhất trên điện thoại của bạn mà bạn cảm thấy xấu hổ nhất?
Chương trình truyền hình yêu thích thời thơ ấu của bạn là gì?
Nếu bạn phải đổi tên, tên mới của bạn sẽ là gì?
Nếu bạn có thể hóa thân thành một nhân vật hư cấu trong một ngày, bạn sẽ chọn ai?
Nếu bạn có thể hẹn hò với một nhân vật hư cấu, bạn sẽ chọn ai?
Có một thứ ngớ ngẩn nào mà bạn không thể sống thiếu không?
Địa điểm nghỉ mát yêu thích thời thơ ấu của bạn là ở đâu?
Trào lưu kỳ lạ nhất mà bạn từng tham gia là gì?
Nếu chỉ được nghe một bài hát duy nhất trong suốt quãng đời còn lại, bạn sẽ chọn bài hát nào?
Bạn nhắn tin cho ai nhiều nhất?
Bạn đã bao giờ bị sa thải khỏi công việc chưa?
Nếu bạn chỉ được phép đi dép xỏ ngón hoặc giày cao gót trong 10 năm tới, bạn sẽ chọn loại nào?
Điều gì sẽ khiến bạn lập tức chấm dứt mối quan hệ với người mình thích?
Nếu chỉ được ăn một loại thức ăn duy nhất trong suốt quãng đời còn lại, bạn sẽ chọn món gì?
Lời nói dối lớn nhất mà bạn từng nói với bố mẹ là gì?
Cơn đau thể xác tồi tệ nhất mà bạn từng trải qua là gì?
Cầu thủ nào hiểu bạn nhất?
Bạn thích phần nào nhất trên cơ thể mình?
Nếu chỉ có thể hoàn thành ba điều trong đời, bạn sẽ chọn làm gì?
Món ăn kỳ lạ nhất mà bạn từng ăn là gì?
Bạn đã bao giờ tắm khỏa thân chưa?
Hãy kể về thất bại lãng mạn lớn nhất mà bạn từng trải qua.
Người nổi tiếng đầu tiên mà bạn hâm mộ là ai?
Giấc mơ kỳ lạ nhất mà bạn từng có là gì?
Ba điều quan trọng nhất bạn tìm kiếm ở người mình yêu là gì?
Thói quen xấu nhất của bạn là gì?
Bạn sở hữu bao nhiêu thú nhồi bông?
Bạn có ngủ với thú nhồi bông nào không?
Điều gì khiến bạn tự ti nhất?
Hãy kể tên một việc bạn sẽ làm nếu biết chắc chắn sẽ không có hậu quả gì.
Bạn có đi tiểu trong khi tắm không?
Điều đáng xấu hổ nhất mà bạn từng làm để thu hút sự chú ý của người mình thích là gì?
Vật dụng ngẫu nhiên nhất trong túi của bạn lúc này là gì?
Bộ phim gần đây nhất khiến bạn khóc là gì?
Bài hát gần đây nhất khiến bạn khóc là bài nào?
Năm mục gần đây nhất trong lịch sử tìm kiếm của bạn là gì?
Lần cuối cùng bạn bị bắt quả tang nói dối là khi nào?
Bạn thực sự thích mùi khó chịu nào?
Người cuối cùng bạn nói "Tôi yêu bạn" là ai?
Bạn đã từng có trải nghiệm siêu nhiên nào chưa?
Nếu bạn có cơ hội ăn trưa với một người nổi tiếng, dù còn sống hay đã mất, bạn sẽ chọn ai và tại sao?
Nếu bạn được nhận 1.000 đô la ngay bây giờ, bạn sẽ dùng nó để làm gì?
Bạn đã bao giờ gian lận trong kỳ thi chưa?
Điều khó xử nhất mà bạn từng bị bắt gặp đang làm là gì?
Buổi hòa nhạc đầu tiên bạn tham dự là gì?
Nếu bạn có cơ hội không bao giờ phải ngủ nữa, bạn có làm vậy không?
Nếu hôm nay bạn phải xăm hình, bạn sẽ xăm hình gì?
Ngay cả khi được trả 1 triệu đô la để làm điều đó, có điều gì bạn sẽ không bao giờ làm?
Nếu bạn có thể du hành về quá khứ và gặp một người, bạn sẽ chọn ai?
Bạn thầm ghét chương trình truyền hình hoặc bộ phim nổi tiếng nào?
Bạn thấy mình sẽ như thế nào trong 10 năm nữa?
Hãy kể tên bài hát karaoke yêu thích của bạn.
Điều mạo hiểm nhất bạn từng làm là gì?
Khi nào bạn gặp nhiều rắc rối nhất ở trường?
Nếu bạn phải luôn ăn mặc quá trang trọng hoặc quá xuề xòa, bạn sẽ chọn cách nào?
Bạn sẽ chọn ai đóng vai bạn và bạn bè của bạn trong phiên bản điện ảnh về cuộc sống của mình?
Điều may mắn nhất từng xảy ra với bạn là gì?
Nếu ngày mai bạn phải chuyển đến một quốc gia khác, bạn sẽ đi đâu?
Bạn đã bao giờ tặng lại một món quà cho người khác chưa? Đó là món quà gì?
Điều kỳ lạ nhất bạn làm khi ở một mình là gì?
Bộ phim (hoặc loạt phim) nào mà bạn cảm thấy xấu hổ nhất khi yêu thích?
Bạn đã từng có một người bạn tưởng tượng chưa? Hãy miêu tả người bạn đó.
Bạn thầm yêu thích sự kết hợp món ăn kinh dị nào?
Nếu bạn có thể trở thành bạn thân với một người nổi tiếng, bạn sẽ chọn ai?
Biệt danh nào khiến bạn cảm thấy xấu hổ nhất?
Nếu bạn có thể đổi cuộc sống với bất kỳ người nào bạn quen biết trong một ngày, bạn sẽ chọn ai?
Bạn đã từng tham gia vào một cuộc ẩu đả nào chưa?
Bạn đã bao giờ gặp sự cố về trang phục chưa?
Giấc mơ đáng sợ nhất mà bạn từng có là gì?
Địa điểm kỳ lạ nhất mà bạn từng hôn/quan hệ với ai đó là ở đâu?
Bạn đã bao giờ nhắn tin riêng cho người nổi tiếng chưa?
Bạn tin vào những điều mê tín nào?
Bạn thuộc đội Edward hay đội Jacob (hay cả hai?)
Bạn thường kiểm tra ứng dụng nào đầu tiên vào buổi sáng?
Món đồ kỳ lạ nhất mà bạn từng mua là gì?
Thời gian dài nhất bạn từng không đánh răng là bao lâu?
Vật kỳ lạ nhất bạn có trong phòng ngủ là gì?
Vật kỳ lạ nhất bạn có trong tủ đồ là gì?
Bạn giặt ga trải giường bao lâu một lần?
Bạn có hát trong khi tắm không? Bài hát cuối cùng bạn hát vang là bài gì?
Điều kỳ lạ nhất bạn làm khi lái xe là gì?
Bạn đã bao giờ tung tin đồn về ai đó chưa? Đó là tin đồn gì?
Nếu bạn có thể nói chuyện với một thầy bói, bạn sẽ hỏi họ điều gì?
Bạn có tin vào người ngoài hành tinh không? Bạn nghĩ họ trông như thế nào?
Bạn đã bao giờ cung cấp số điện thoại giả chưa?
Điều gì quan trọng hơn với bạn: tình yêu hay tiền bạc?
Bạn đã bao giờ được xem chỉ tay chưa?
Có thuyết âm mưu nào mà bạn thực sự tin tưởng không?
Kế hoạch sinh tồn của bạn trong một cuộc tận thế zombie là gì?
Địa điểm nào nằm trong danh sách những nơi bạn muốn đến du lịch?
`.trim().split('\n');

const deepTruths = `
Điều bạn hối tiếc nhất là gì?
Bài học đáng nhớ nhất mà bạn học được từ cha mẹ là gì?
Bạn đang ghen tị với ai?
Bạn đã bao giờ yêu từ cái nhìn đầu tiên chưa?
Lần cuối bạn khóc là khi nào?
Nỗi sợ lớn nhất của bạn là gì?
Lần cuối cùng bạn nói lời xin lỗi là khi nào? Vì điều gì?
Bạn có nỗi sợ hãi nào không?
Bạn có tin vào kiếp sau không?
Bạn muốn được mọi người nhớ đến vì điều gì nhất trong cuộc đời?
Bạn có tin vào tri kỷ không?
Điều tồi tệ nhất bạn từng nói với ai đó là gì?
Bạn đã bao giờ bị ai đó từ chối chưa?
Bạn có muốn kết hôn trong tương lai không?
Điều gì khiến bạn hào hứng nhất vào lúc này?
Bạn thường viết về điều gì nhất trong nhật ký của mình?
Bạn có sợ tương lai không?
Bạn đã bao giờ bỏ rơi ai đó chưa?
Bạn đã bao giờ cố ý phá hoại ai đó chưa?
Bạn đã bao giờ nói dối bạn bè chưa?
Bạn đã bao giờ nói "Tôi yêu bạn" với ai đó mà không thật lòng chưa?
Các ưu tiên của bạn đã thay đổi như thế nào theo thời gian?
Nếu đột nhiên bạn có một triệu đô la, bạn sẽ tiêu nó như thế nào?
Có người yêu cũ nào mà bạn muốn hàn gắn lại mối quan hệ không?
Hãy kể tên một việc bạn sẽ làm nếu biết chắc chắn sẽ không có hậu quả gì.
Về tính cách, bạn giống mẹ hay bố hơn?
Điều gì khiến bạn tự hào nhất trong cuộc đời mình?
Bạn thấy vui vì đã đốt bỏ những cây cầu nào?
Nỗi sợ lớn nhất của bạn khi còn nhỏ là gì?
Mối tình tan vỡ đầu tiên của bạn là gì?
Sai lầm lớn nhất bạn từng mắc phải là gì?
Có điều gì về bạn mà bạn thấy mừng vì mẹ bạn không biết?
Điều tồi tệ nhất mà ai đó từng làm với bạn là gì?
Trải nghiệm nào gây đau đớn nhất về thể chất cho bạn?
Có việc gì bạn biết mình cần làm nhưng lại chẳng hề mong muốn làm chút nào không?
Có điều gì bạn chỉ làm khi ở một mình không?
Lời khen tuyệt vời nhất mà bạn từng nhận được là gì?
Điều đáng sợ nhất từng xảy ra với bạn là gì?
Món đồ yêu thích nhất của bạn là gì?
Bạn có kết hôn với người giàu ngay cả khi bạn không yêu họ không?
Bạn đã bao giờ hết yêu chưa?
Hãy kể tên một thói quen trẻ con mà bạn vẫn còn làm.
Bạn đã bao giờ để người khác chịu trách nhiệm cho việc mình đã làm chưa?
Điều ngu ngốc nhất bạn từng làm vì người mình thích hoặc người yêu là gì?
Bạn nghĩ gì khi đang ngồi trên bồn cầu?
Bạn sẵn sàng đi xa đến mức nào vì người trong mộng của mình?
Bạn đã từng làm điều gì ngu ngốc để cố gắng tỏ ra "ngầu" hơn?
Mối tình đầu của bạn là ai?
Nếu bạn bị mắc kẹt trên một hòn đảo, bạn muốn bị mắc kẹt cùng với ai?
Nghề nghiệp mơ ước của bạn là gì?
Điều gì khiến bạn hạnh phúc nhất?
Với bạn, cảm giác yêu đương như thế nào?
Bạn có nghĩ mình là người tốt không?
Một ngày hoàn hảo bao gồm những yếu tố nào?
Bạn có tin rằng việc có những bí mật trong một mối quan hệ là điều chấp nhận được không?
Nếu bạn thấy người yêu của bạn mình ngoại tình, bạn có nói với bạn mình không? Tại sao hoặc tại sao không?
Bạn có dễ dàng tin tưởng người khác không?
Bạn thích tình yêu phát triển từ từ hay tình yêu sét đánh hơn?
Bước ngoặt lớn nhất mà bạn từng thực hiện là gì?
Bạn có tin vào chế độ một vợ một chồng không?
Bạn thường nghe theo trái tim hay lý trí hơn?
Đúng hay sai: Du lịch giúp bạn trở thành người tốt hơn.
Có điều gì mà bạn thực sự sợ thất bại không?
Trong cuộc sống của bạn, ai là người hiểu bạn nhất?
Bạn đã từng đánh mất một tình bạn mà đến giờ vẫn còn nhớ nhung chưa?
Gần đây bạn đã thay đổi quan điểm về niềm tin hoặc ý kiến nào?
Nếu bạn có thể làm lại một khoảnh khắc trong đời, đó sẽ là khoảnh khắc nào?
Lần cuối cùng bạn thực sự tự làm mình ngạc nhiên là khi nào?
Bạn đã phớt lờ "dấu hiệu cảnh báo" nào và sau đó hối hận?
Bạn cảm thấy biết ơn vì đã nghe theo "dấu hiệu cảnh báo xanh" nào?
Bạn đã bao giờ cảm thấy mình không còn phù hợp với ai đó nữa chưa? Bạn đã làm gì để giải quyết cảm giác đó?
Có điều gì bạn chưa từng chia sẻ vì sợ bị phán xét không?
Bạn đã trưởng thành theo cách nào trong năm qua?
`.trim().split('\n');

const spicyTruths = `
Bạn thầm thích ai?
Người cuối cùng bạn theo dõi trên mạng xã hội là ai?
Hãy kể hết chi tiết về nụ hôn đầu tiên của bạn.
Câu tán tỉnh táo bạo nhất mà bạn từng dùng là gì?
Bạn còn tình cảm với người yêu cũ nào không?
Bạn đã bao giờ gửi tin nhắn khiêu dâm chưa?
Nếu đang trong một mối quan hệ, bạn sẽ cho phép ai là người nổi tiếng mà bạn "ngoại tình"?
Bạn thấy bộ phận nào trên cơ thể mình hấp dẫn một cách bất ngờ?
Bạn đã bao giờ tán tỉnh anh chị em ruột của một người bạn thân chưa?
Điều bạn mơ ước nhất là gì?
Nếu phải hôn một người trong căn phòng này, bạn sẽ chọn ai?
Bạn có bao giờ hẹn hò với người yêu cũ của bạn mình nếu họ cho phép không?
Bạn đã bao giờ mơ thấy ai đó ở đây có vẻ gợi cảm chưa?
Bạn đã bao giờ giả vờ thích ai đó hoặc giả vờ tán tỉnh để khiến người khác ghen chưa?
Bài hát nào luôn khiến bạn cảm thấy hứng khởi?
Bạn đã bao giờ nảy sinh tình cảm với người mà bạn không nên có chưa?
Điều bất ngờ nhất mà bạn từng làm vì tình yêu (hoặc vì người mình thích) là gì?
Bạn sẽ gọi cho ai để hẹn hò "không cần hỏi han gì"?
Bạn thường mặc gì khi muốn cảm thấy quyến rũ?
Điều gì là yếu tố khiến bạn cảm thấy không thể chấp nhận được nhất khi hẹn hò?
Bạn đã bao giờ hôn người mà bạn không định hôn chưa?
Bạn đã từng hẹn hò (hoặc muốn hẹn hò) với ai đó mà bạn gặp trong một chuyến đi chưa?
Tin nhắn mạo hiểm nhất mà bạn từng gửi là gì?
Bạn đã từng trải qua tình huống "bạn tình" chưa?
Bạn đã bao giờ hôn hít hay thân mật ở một nơi mà bạn tuyệt đối không nên đến chưa?
Bạn muốn hôn ai ngay lập tức mà không chút do dự?
Điều táo bạo nhất bạn từng làm khi tán tỉnh là gì?
Bạn đã bao giờ tán tỉnh chỉ để đạt được điều gì đó chưa?
Người bạn hấp dẫn. Ai là người đầu tiên bạn nghĩ đến?
Bạn đã bao giờ có tình cảm với hai người cùng một lúc chưa?
Bạn đã bao giờ nảy sinh tình cảm với người nào đó lớn tuổi hơn hoặc nhỏ tuổi hơn mình chưa?
Có một bí mật nào về chuyện tình cảm mà bạn chưa từng tiết lộ với ai cho đến bây giờ?
Theo bạn, ai trong căn phòng này sẽ hôn giỏi nhất?
Bạn đã bao giờ hôn nhiều hơn một người trong vòng 24 giờ chưa?
`.trim().split('\n');

const easyDares = `
Hãy chọn một người trong phòng này và (một cách trìu mến) trêu chọc họ trong một phút liên tục.
Nhờ người khác đăng chú thích ảnh trên Instagram thay bạn.
Ngửi mùi nách của một cầu thủ khác.
Ngửi mùi bàn chân trần của một cầu thủ khác.
Ăn một miếng vỏ chuối.
Hãy bắt chước giọng điệu của một người chơi khác cho đến khi ai đó đoán ra đó là ai.
Hãy nói "dưa chua" ở cuối mỗi câu bạn nói cho đến khi trò chơi kết thúc.
Hãy bắt chước một ngôi sao TikTok cho đến khi người chơi khác đoán được bạn đang đóng vai ai.
Hãy giả vờ như một con gà cho đến lượt của bạn tiếp theo.
Hãy nói bằng giọng Anh cho đến lượt bạn tiếp theo.
Gọi điện cho một người bạn, giả vờ hôm nay là sinh nhật họ và hát bài "Chúc mừng sinh nhật bạn" cho họ nghe.
Hãy nêu tên một người nổi tiếng có ngoại hình giống với mỗi người chơi trong phòng.
Hãy thể hiện những bước nhảy đẹp nhất của bạn cho chúng tôi xem.
Ăn trực tiếp một gói tương ớt.
Hãy nhờ người khác vẽ hình xăm lên lưng bạn bằng bút dạ không phai.
Bịt mắt lại và chạm vào mặt những người chơi khác cho đến khi bạn nhận ra được ai là ai.
Cắn trực tiếp vào củ hành tây sống mà không cần thái lát.
Hãy ra ngoài và cố gắng "gọi" mưa thật to.
Hát tặng người bên phải bạn trong một phút.
Thực hiện 20 động tác ngồi xổm.
Hãy để những người chơi khác làm lại kiểu tóc cho bạn.
Ăn trực tiếp loại gia vị bạn thích từ chai.
Đổ hết đồ trong ví, ba lô hoặc túi quần áo ra và cho mọi người xem những gì bên trong.
Hãy để người chơi bên phải bạn trang điểm lại cho bạn trong khi họ nhắm mắt.
Gọi điện thoại trêu chọc một thành viên trong gia đình bạn.
Hãy để một người chơi khác làm một chiếc mũ bằng giấy vệ sinh — và bạn phải đội nó cho đến hết trò chơi.
Giữ tư thế plank trong một phút.
Hãy thể hiện phong thái tự tin nhất khi sải bước trên sàn catwalk.
Cho năm viên đá vào miệng (không được nhai, chỉ cần để chúng tan chảy – lạnh buốt!).
Sủa như chó cho đến khi đến lượt bạn.
Hãy vẽ bộ phim yêu thích của bạn và nhờ người kia đoán xem đó là phim gì (theo kiểu trò chơi Pictionary).
Lặp lại tất cả những gì người bên phải bạn nói cho đến lượt bạn tiếp theo.
Hãy trình diễn cách bạn tạo kiểu tóc trước gương (mà không thực sự dùng gương).
Giả vờ chơi đàn guitar trong một phút.
Đổ một cốc nước lạnh lên đầu khi ở ngoài trời.
Hãy lên Instagram Live và đọc diễn cảm một trong những cuốn sách giáo khoa của bạn.
Trong 10 phút tiếp theo, hãy tìm cách làm cho một người chơi khác sợ hãi và tạo bất ngờ.
Liếm một thỏi xà phòng.
Hãy nói chuyện với chiếc gối như thể đó là người bạn thầm yêu.
Đăng bức ảnh selfie cũ nhất trong điện thoại của bạn lên story trên Snapchat hoặc Instagram (và để nguyên như vậy!).
Hãy thử điệu nhảy TikTok đầu tiên trên trang cá nhân của bạn.
Trong 10 phút tiếp theo, mỗi lần nói chuyện, hãy bắt chước một người nổi tiếng do cả nhóm lựa chọn.
Cùng nhau hát karaoke một bài hát do cả nhóm lựa chọn.
Đăng một bức ảnh (bất kỳ bức ảnh nào) lên mạng xã hội kèm theo lời nhắn chân thành dành tặng một người nổi tiếng do nhóm lựa chọn.
Tìm lại mối tình đầu của bạn trên mạng xã hội và nhắn tin riêng cho họ.
Bóc vỏ chuối chỉ bằng các ngón chân.
Hãy để cả nhóm trộn năm loại chất lỏng bất kỳ mà họ tìm thấy trong tủ lạnh lại với nhau, rồi cùng uống.
Hãy mang tất của một cầu thủ khác như găng tay trong năm phút tiếp theo.
Trang điểm mà không cần nhìn gương, rồi giữ nguyên như vậy cho đến hết trận đấu.
Hãy mô tả phẩm chất hấp dẫn nhất của mỗi người trong phòng.
Hãy hát như một ca sĩ opera thay vì nói chuyện trong năm phút tới.
Cho phép người bên phải bạn vẽ lên mặt bạn bằng bút dạ.
Nhảy xuống hồ bơi (hoặc tắm vòi sen) với tất cả quần áo trên người!
Hãy đứng ngoài nhà và vẫy tay chào mọi người đi ngang qua trong vòng một phút tới.
Hãy giả vờ như đang ở dưới nước trong 10 phút tiếp theo.
Hôn hít với một chiếc gối.
Hãy bình luận tán tỉnh vào bức ảnh Instagram đầu tiên mà bạn thấy.
Mát-xa chân cho người bên phải bạn (với sự đồng ý của họ).
Hãy giả vờ làm vũ công ba lê cho đến lượt bạn tiếp theo.
Hãy thử cho cả nắm tay vào miệng.
Hãy cho bạn bè xem báo cáo thời gian sử dụng màn hình của bạn.
Hãy ra ngoài và hú lên với mặt trăng.
Hãy để người khác viết dòng giới thiệu tiếp theo của bạn trên Hinge.
Hãy cho cả nhóm biết "gu" của bạn mà không dùng bất kỳ từ ngữ nào — chỉ dùng biểu tượng cảm xúc.
Gọi một số điện thoại bất kỳ và cố gắng trò chuyện 1 phút với người trả lời.
Gửi tin nhắn "Chào người lạ" cho người mà bạn đã không nói chuyện trong hơn một năm.
Hãy gửi cho bố hoặc mẹ một tin nhắn ngắn gọn: "Chúng ta cần nói chuyện."
Nhắn tin riêng cho một người bất kỳ với nội dung "Tôi có một đề xuất kinh doanh muốn chia sẻ với bạn" và cho họ biết phản hồi của mình.
Giả vờ chia tay đầy cảm xúc với một chiếc ghế (cực kỳ kịch tính).
Tổ chức một "cuộc thi giả vờ ngất xỉu kịch tính" với một người chơi khác — ai giả vờ thuyết phục hơn sẽ thắng.
Hãy để ai đó cù lét bạn liên tục trong 30 giây trong khi bạn cố gắng nhịn cười.
Hãy xếp hạng mọi người trong phòng theo thứ tự bạn nghĩ ai sẽ sống sót lâu nhất trên một hòn đảo hoang (và hãy giải thích lý do của bạn).
Hãy giả vờ như bạn đang thử giọng cho chương trình “America's Next Top Model” và tự tin sải bước/tạo dáng như thể mạng sống của bạn phụ thuộc vào điều đó.
`.trim().split('\n');

const hardDares = `
Đưa điện thoại của bạn cho một người chơi khác, người đó có thể gửi một tin nhắn văn bản duy nhất với nội dung bất kỳ đến bất kỳ ai họ muốn.
Đăng bức ảnh thứ 10 trong thư viện ảnh của bạn lên story (không được thêm chú thích!).
Hãy cùng nhau khiêu vũ quyến rũ theo một bài hát do cả nhóm lựa chọn.
Hãy đọc to đoạn tin nhắn mang tính cá nhân nhất mà bạn đã gửi trong những ngày gần đây.
Hãy xem danh bạ điện thoại của bạn và gọi cho một người mà bạn đã không nói chuyện trong một năm.
Cho phép những người chơi khác xem điện thoại của bạn trong một phút.
Gửi biểu tượng cảm xúc hình trái tim có mắt vào story Instagram của người bạn thích.
Vào trang Instagram của người bạn thích và nhấn like một bài đăng nào đó từ vài tuần trước.
Cho phép mọi người xem lịch sử Snapchat của bạn.
Nhắn tin cho người mình thích "đang nghĩ về bạn 👀" — không cần giải thích gì thêm.
Hãy để cả nhóm đưa ra cho bạn một thử thách ngớ ngẩn cần hoàn thành ngoài trời — bạn có 2 phút.
Ăn hết một lát chanh mà không biểu lộ cảm xúc. Nếu không làm được, hãy nhắn tin cho người yêu cũ "Này người lạ."
Hãy đứng ngoài trời và hét lên nỗi sợ hãi phi lý lớn nhất của bạn.
Hãy trình diễn một điệu nhảy biểu cảm để giải thích cách mối quan hệ cuối cùng của bạn kết thúc.
Hãy để mọi người chọn hai món đồ để bạn mặc ra ngoài.
Hãy trình diễn một điệu nhảy minh họa dựa trên câu chuyện thời thơ ấu đáng xấu hổ nhất của bạn.
Diễn tả bằng cử chỉ chi tiết về mối quan hệ không chính thức gần đây nhất của bạn.
Hãy tán tỉnh người bên cạnh bạn một cách nghiêm túc trong ba lượt tiếp theo.
Hãy để cả nhóm bịt mắt bạn và cho bạn ăn một món ăn để đoán (tất nhiên là phải kiểm tra dị ứng trước).
Hãy hôn người bên phải bạn (nếu họ không phiền).
Hãy cố gắng hết sức để quyến rũ món đồ nội thất gần nhất.
Hãy diễn một tiết mục hài độc thoại (dở tệ) nhất có thể về buổi hẹn hò khó xử nhất mà bạn từng trải qua.
Hãy dành năm phút để viết một bài hát về người bên trái bạn, sau đó hát/biểu diễn bài hát đó.
Hãy tự giới thiệu bản thân như một thí sinh tham gia chương trình The Bachelor/Bachelorette trong một video dài 30 giây.
Hãy tự chế giễu bản thân trong hai phút — hết mình và trung thực hết mức.
`.trim().split('\n');

export const questionGroups = Object.freeze([
  { id: 'tv-truth-general', type: 'truth', items: generalTruths },
  { id: 'tv-truth-deep', type: 'truth', items: deepTruths },
  { id: 'tv-truth-spicy', type: 'truth', items: spicyTruths },
  { id: 'tv-dare-easy', type: 'dare', items: easyDares },
  { id: 'tv-dare-hard', type: 'dare', items: hardDares },
].map(group => Object.freeze({ ...group, items: Object.freeze(group.items) })));
